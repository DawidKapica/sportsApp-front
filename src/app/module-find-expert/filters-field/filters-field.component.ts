import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {SpecialisationDto} from '../../dataBaseObjects/SpecialisationDto';
import {ExpertDto} from '../../dataBaseObjects/ExpertDto';
import {Mapping} from '../../dataBaseObjects/Mapping';

interface searchFilter {
    phone: string,
    mail: string,
    firstName: string,
    secondName: string,
    specialisation: number[],
    opinion: number
}

@Component({
    selector: 'app-filters-field',
    templateUrl: './filters-field.component.html',
    styleUrls: ['./filters-field.component.css']
})
export class FiltersFieldComponent implements OnInit {

    @Output()
    changeEvent = new EventEmitter<searchFilter>();

    formGroup: FormGroup = new FormGroup({
        // phone: new FormControl()
    });
    selected = null;

    isloading = true;

    spec:FormControl = new FormControl();


    specialisations: SpecialisationDto[] = [];
    constructor(private api: ApiService,  private cdRef: ChangeDetectorRef) {
        this.formGroup.addControl('phone', new FormControl(''));
        this.formGroup.addControl('mail', new FormControl(''));
        this.formGroup.addControl('firstName', new FormControl(''));
        this.formGroup.addControl('secondName', new FormControl(''));
        this.formGroup.addControl('specialisation', new FormControl(''));
        this.formGroup.addControl('minExp', new FormControl(''));
    }

    ngOnInit(): void {
        this.loadData();
        this.isloading = false;
        this.cdRef.detectChanges();

    }

    async loadData() {
        this.specialisations = await this.api.get(Mapping.SPECIALISATION);

    }

    filterSearch() {
        console.log(this.spec)
        let searchFill: searchFilter = {
            phone: this.formGroup.controls['phone'].value,
            mail: this.formGroup.controls['mail'].value,
            firstName: this.formGroup.controls['firstName'].value,
            secondName: this.formGroup.controls['secondName'].value,
            specialisation: this.spec.value,
            opinion: this.formGroup.controls['minExp'].value,
        };
        this.changeEvent.emit(searchFill);
    }

    //    education: string;
    //     description: string;
    //     phone: number;
    //     mail: string;
    //specialisation
    // opinion
}
