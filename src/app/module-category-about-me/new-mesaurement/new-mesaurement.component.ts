import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {UserDetailDto} from '../../dataBaseObjects/UserDetailDto';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CategoryAboutMeComponent} from '../category-about-me/category-about-me.component';

@Component({
    selector: 'app-new-mesaurement',
    templateUrl: './new-mesaurement.component.html',
    styleUrls: ['./new-mesaurement.component.css']
})
export class NewMesaurementComponent implements OnInit {

    @Input() dataSource: doubleInformationAndType[] = [];
    @Input() lastMeasureUpdate: any = null;

    userDataInfoFirstCol: doubleInformationAndType[] = [];
    userDataInfoSecondCol: doubleInformationAndType[] = [];
    formGroup: FormGroup = new FormGroup({});
    isLoadingResults = true;

    constructor(private api: ApiService, private cdRef: ChangeDetectorRef, private _snackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        let inputTableLen = this.dataSource.length;
        let firstColLen = Math.ceil((inputTableLen/2));
        let sndColLen = Math.floor((inputTableLen/2));

        for (let i = 0; i < firstColLen; i++) {
            this.userDataInfoFirstCol.push(this.dataSource[i]);
        }

        for (let i = firstColLen; i < firstColLen+sndColLen; i++) {
            this.userDataInfoSecondCol.push(this.dataSource[i]);
        }

        for (const x of this.dataSource) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }

        this.isLoadingResults = false;
    }

    updateData() {
        let newDetail: UserDetailDto = {
            weight: this.formGroup.controls['weight'].value,
            valueDate: new Date(),
            neckCircumference: this.formGroup.controls['neckCircumference'].value,
            calfCircumference: this.formGroup.controls['calfCircumference'].value,
            thighCircumference: this.formGroup.controls['thighCircumference'].value,
            hipCircumference: this.formGroup.controls['hipCircumference'].value,
            chestCircumference: this.formGroup.controls['chestCircumference'].value,
            forearmCircumference: this.formGroup.controls['forearmCircumference'].value,
            bicepsCircumference: this.formGroup.controls['bicepsCircumference'].value,
            circumferenceAbdomen: this.formGroup.controls['circumferenceAbdomen'].value,
            userId: this.api.userId,
        };

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todayString = yyyy + '-' + mm + '-' + dd;
        this.lastMeasureUpdate = todayString;


        this.api.post(Mapping.USER_DETAIL, newDetail)

        this.openSnackBar();

    }

    openSnackBar() {
        this._snackBar.open("Twoje parametry zaaktualizowanie", );
    }



}
