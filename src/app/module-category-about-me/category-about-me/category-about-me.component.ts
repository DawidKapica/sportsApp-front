import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {UserDetailDto} from '../../dataBaseObjects/UserDetailDto';
import {ApiService} from '../../service/api.service';
import {UserPlanDto} from '../../dataBaseObjects/UserPlanDto';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-category-about-me',
    templateUrl: './category-about-me.component.html',
    styleUrls: ['./category-about-me.component.css']
})
export class CategoryAboutMeComponent implements OnInit {

    actualMeasurmentArray: doubleInformationAndType[] = [];

    isLoadingResults = true;

    userDetailsTab: any;
    userData: any;
    lastMeasureUpdateDate: Date = null;
    userPlans: any;
    BMI: number;

    inputUserTypeFirstCol: doubleInformationAndType[] = [];
    inputUserData: doubleInformationAndType[] = [];
    inputUserDietData: doubleInformationAndType[] = [];

    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    async ngOnInit() {
        await this.loadData();

        this.isLoadingResults = false;
        this.cdRef.detectChanges();

    }

    async loadData() {

        this.userDetailsTab = await this.api.get(Mapping.USER_DETAIL + Mapping.SEARCH + Mapping.USERID + this.api.userId);
        this.userData = await this.api.getFullObject(Mapping.USER + '/' + this.api.userId);
        this.userPlans = await this.api.get(Mapping.USER_PLANS + Mapping.SEARCH + Mapping.USERID + this.api.userId);
        await this.extractActualData(this.userDetailsTab);
        await this.prepareUserData(this.userData);

        // console.log(this.userData);
        // console.log(this.userPlans);
    }

    async extractActualData(userDetailTab: UserDetailDto[]) {

        let userDetActual: UserDetailDto = {
            id: null,
            weight: null,
            circumferenceAbdomen: null,
            bicepsCircumference: null,
            forearmCircumference: null,
            chestCircumference: null,
            hipCircumference: null,
            thighCircumference: null,
            calfCircumference: null,
            neckCircumference: null,
            userId: null,
            valueDate: null
        };

        if (userDetailTab != null) {
            userDetActual = userDetailTab[0];
            this.lastMeasureUpdateDate = userDetActual.valueDate;

            for (let userDetail of userDetailTab) {
                if (userDetail.valueDate > userDetActual.valueDate) {
                    userDetActual = userDetail;
                    this.lastMeasureUpdateDate = userDetail.valueDate;
                }
            }
        }

        this.inputUserTypeFirstCol.push(
            {firsrtFieldName: 'Waga', secondFieldName: userDetActual.weight, formControlName: "weight"},
            {firsrtFieldName: 'Obwód w pasie', secondFieldName: userDetActual.circumferenceAbdomen, formControlName: "circumferenceAbdomen"},
            {firsrtFieldName: 'Obwód bicepsa', secondFieldName: userDetActual.bicepsCircumference, formControlName: "bicepsCircumference"},
            {firsrtFieldName: 'Obwód przedramienia', secondFieldName: userDetActual.forearmCircumference, formControlName: "forearmCircumference"},
            {firsrtFieldName: 'Obwód klatki piersiowej', secondFieldName: userDetActual.chestCircumference, formControlName: "chestCircumference"},
            {firsrtFieldName: 'Obwód w biodrach', secondFieldName: userDetActual.hipCircumference, formControlName: "hipCircumference"},
            {firsrtFieldName: 'Obwód uda', secondFieldName: userDetActual.thighCircumference, formControlName: "thighCircumference"},
            {firsrtFieldName: 'Obwód łydki', secondFieldName: userDetActual.calfCircumference, formControlName: "calfCircumference"},
            {firsrtFieldName: 'Obwód szyi', secondFieldName: userDetActual.neckCircumference, formControlName: "neckCircumference"},
            );
        if (userDetActual.weight != null && userDetActual.weight > 0 && this.userData.height != null && this.userData.height > 0 ) {
            this.BMI = Math.round(userDetActual.weight/((this.userData.height/100) * (this.userData.height)/100)*100)/100;
        } else {
            this.BMI = 0;
        }
    }

    async prepareUserData(userDataUnprepare: UserDto) {
        this.inputUserData.push(
            {firsrtFieldName: 'Imie', secondFieldName: userDataUnprepare.firstName, formControlName: "firstName", type: "input"},
            {firsrtFieldName: 'Nazwisko', secondFieldName: userDataUnprepare.lastName, formControlName: "lastName", type: "input"},
            {firsrtFieldName: 'Data urodzenia', secondFieldName: userDataUnprepare.birthdate, formControlName: "birthdate", type: "date"},
            {firsrtFieldName: 'Wzrost', secondFieldName: userDataUnprepare.height, formControlName: "height", type: "inputNum"},

        );
        this.inputUserDietData.push(
            {firsrtFieldName: 'Kalorii', secondFieldName: userDataUnprepare.dailyCalRequirement, formControlName: "dailyCalRequirement", type: "inputNum"},
            {firsrtFieldName: 'Węglowodanów', secondFieldName: userDataUnprepare.dailyCarbRequirement, formControlName: "dailyCarbRequirement", type: "inputNum"},
            {firsrtFieldName: 'Białka', secondFieldName: userDataUnprepare.dailyProtRequirement, formControlName: "dailyProtRequirement", type: "inputNum"},
            {firsrtFieldName: 'Tłuszczy', secondFieldName: userDataUnprepare.dailyFatRequirement, formControlName: "dailyFatRequirement", type: "inputNum"}
        )
    }

}
