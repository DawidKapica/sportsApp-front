import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-filters-field',
    templateUrl: './filters-field.component.html',
    styleUrls: ['./filters-field.component.css']
})
export class FiltersFieldComponent implements OnInit {

    formGroup: FormGroup = new FormGroup({
        // phone: new FormControl()
    });


    constructor() {
        this.formGroup.addControl('phone', new FormControl(''));
        this.formGroup.addControl('mail', new FormControl(''));
        this.formGroup.addControl('firstName', new FormControl(''));
        this.formGroup.addControl('secondName', new FormControl(''));
        this.formGroup.addControl('specialisation', new FormControl(''));
        this.formGroup.addControl('opinion', new FormControl(''));
    }

    ngOnInit(): void {
    }

    //    education: string;
    //     description: string;
    //     phone: number;
    //     mail: string;
    //specialisation
    // opinion
}
