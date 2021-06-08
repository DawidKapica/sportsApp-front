import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {doubleInformationAndType} from '../interfaceComunicationObjects/doubleInformationAndType';
import {FormControl, FormGroup} from '@angular/forms';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';

@Component({
    selector: 'app-register-dialog',
    templateUrl: './register-dialog.component.html',
    styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

    userInformation: doubleInformationAndType[] = [
        {firsrtFieldName: 'Imie', secondFieldName: '', formControlName: "firstName", type: "input"},
        {firsrtFieldName: 'Nazwisko', secondFieldName: '', formControlName: "lastName", type: "input"},
        {firsrtFieldName: 'Data urodzenia', secondFieldName: '', formControlName: "birthdate", type: "date"},
        {firsrtFieldName: 'Wzrost', secondFieldName: '', formControlName: "height", type: "inputNum"},
        {firsrtFieldName: 'Email', secondFieldName: '', formControlName: "email", type: "input"},
    ];
    userDietInformation: doubleInformationAndType[] = [
        {firsrtFieldName: 'Kalorii', secondFieldName: '', formControlName: "dailyCalRequirement", type: "inputNum"},
        {firsrtFieldName: 'Węglowodanów', secondFieldName: '', formControlName: "dailyCarbRequirement", type: "inputNum"},
        {firsrtFieldName: 'Białka', secondFieldName: '', formControlName: "dailyProtRequirement", type: "inputNum"},
        {firsrtFieldName: 'Tłuszczy', secondFieldName: '', formControlName: "dailyFatRequirement", type: "inputNum"}];


    formGroup: FormGroup = new FormGroup({});


    constructor(private api: ApiService, public dialog: MatDialog, public dialogRef: MatDialogRef<number>, @Inject(MAT_DIALOG_DATA) public data: string) {
    }

    ngOnInit(): void {
        for (const x of this.userInformation) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }
        for (const x of this.userDietInformation) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }
    }

    async createUser() {

        console.log(this.data)
        let newUserData: UserDto = {
            firstName: this.formGroup.controls['firstName'].value,
            lastName: this.formGroup.controls['lastName'].value,
            height: this.formGroup.controls['height'].value,
            dailyFatRequirement: this.formGroup.controls['dailyFatRequirement'].value,
            dailyProtRequirement: this.formGroup.controls['dailyProtRequirement'].value,
            dailyCarbRequirement: this.formGroup.controls['dailyCarbRequirement'].value,
            dailyCalRequirement: this.formGroup.controls['dailyCalRequirement'].value,
            // birthdate: '2020-10-10',
            email: this.data,
            loginId: 1
        };

        let x = await this.api.postFullObject(Mapping.USER, newUserData);
        console.log(x);
        this.api.setUserId(newUserData.id, true);
        this.data = x.id;
        this.dialogRef.close(this.data);

    }
}
