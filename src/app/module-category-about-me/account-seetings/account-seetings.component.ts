import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

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

    inputFormsGroup: FormGroup = this.fb.group(
        {
            desiredCaloriesIntake: [''],
            desiredProteinsIntake: [''],
            desiredCarbohydratesIntake: [''],
            desiredFatIntake: [''],
            emailFormControl: ['', [Validators.required, Validators.email]],
            birthdate: [''],
            firstName: [''],
            secondName: ['']

        }
    );

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
    }


}
