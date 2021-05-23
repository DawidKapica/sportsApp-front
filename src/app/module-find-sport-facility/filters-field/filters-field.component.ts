import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExerciseCategoryDto} from '../../dataBaseObjects/ExerciseCategoryDto';
import {ExerciseDto} from '../../dataBaseObjects/ExerciseDto';
import {ParameterDto} from '../../dataBaseObjects/ParameterDto';
import {SportFacilitiesDto} from '../../dataBaseObjects/SportFacilitiesDto';
import {SportFacilitiesCategoryDto} from '../../dataBaseObjects/SportFacilitiesCategoryDto';

interface ExercisesGroups {
    disabled?: boolean;
    name: string;
    sportFacility: SportFacilitiesDto[];
}

@Component({
    selector: 'app-filters-field',
    templateUrl: './filters-field.component.html',
    styleUrls: ['./filters-field.component.css']
})
export class FiltersFieldComponent implements OnInit {

    nameForm = new FormControl();
    formGroup: FormGroup = new FormGroup({});
    selected = 'option2';
    selectedIsPaid = 'noMetter'
    isLoadingResults = true;


    categories: SportFacilitiesCategoryDto[];
    sportFacilities: SportFacilitiesDto[];

    sportFacilitiesGroups: ExercisesGroups[] = [];


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
        this.formGroup.addControl('category', new FormControl(''));
        this.formGroup.addControl('paid', new FormControl(''));
    }

    async ngOnInit() {

        await this.loadData();
    }

    async loadData() {

        this.categories = await this.api.get(Mapping.SPORT_FACILITY_CATEGORY);
        this.sportFacilities = await this.api.get(Mapping.SPORT_FACILITY);

        for (let singleCategory of this.categories) {
            this.sportFacilitiesGroups.push({
                name: singleCategory.name,
                sportFacility: []
            })
        }

        for (let singleSportFacilities of this.sportFacilities) {
            this.sportFacilitiesGroups.find(e => e.name == singleSportFacilities.sportFacilitiesCategory.name).sportFacility.push(singleSportFacilities);
        }

        this.isLoadingResults = false;
        this.cdRef.detectChanges();
    }

}
