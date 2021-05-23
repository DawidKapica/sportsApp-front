import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';

@Component({
    selector: 'app-account-seetings',
    templateUrl: './account-seetings.component.html',
    styleUrls: ['./account-seetings.component.css']
})
export class AccountSeetingsComponent implements OnInit {

    // inputFormsGroup: FormGroup = new FormGroup({}, undefined, undefined);

    // emailFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    // ]);

    // @Input()
    // userData: UserDto;

    // @Input() dataSource: doubleInformationAndType[] = [];
    @Input() userInformation: doubleInformationAndType[] = [];
    @Input() userDietInformation: doubleInformationAndType[] = [];
    @Input() BMI: number;

    formGroup: FormGroup = new FormGroup({});

    // inputFormsGroup: FormGroup = this.fb.group(
    //     {
    //         desiredCaloriesIntake: [''],
    //         desiredProteinsIntake: [''],
    //         desiredCarbohydratesIntake: [''],
    //         desiredFatIntake: [''],
    //         emailFormControl: ['', [Validators.required, Validators.email]],
    //         birthdate: [''],
    //         firstName: [''],
    //         secondName: ['']
    //
    //     }
    // );

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        for (const x of this.userInformation) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }
        for (const x of this.userDietInformation) {
            this.formGroup.addControl(x.formControlName, new FormControl(x.secondFieldName));
        }


    }


}
