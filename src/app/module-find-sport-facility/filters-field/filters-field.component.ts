import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ExerciseCategoryDto} from '../../dataBaseObjects/ExerciseCategoryDto';
import {ExerciseDto} from '../../dataBaseObjects/ExerciseDto';
import {ParameterDto} from '../../dataBaseObjects/ParameterDto';
import {SportFacilitiesDto} from '../../dataBaseObjects/SportFacilitiesDto';
import {SportFacilitiesCategoryDto} from '../../dataBaseObjects/SportFacilitiesCategoryDto';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';

interface ExercisesGroups {
    disabled?: boolean;
    name: string;
    sportFacility: SportFacilitiesDto[];
}

interface searchFilter {
    isPaid: boolean
    name: string,
    category: string,
}

@Component({
    selector: 'app-filters-field',
    templateUrl: './filters-field.component.html',
    styleUrls: ['./filters-field.component.css']
})
export class FiltersFieldComponent implements OnInit {

    nameForm = new FormControl();
    formGroup: FormGroup = new FormGroup({});
    selected = 'undefined';
    selectedIsPaid = 'noMetter'
    isLoadingResults = true;

    @Output()
    changeEvent = new EventEmitter<searchFilter>();

    categories: SportFacilitiesCategoryDto[];
    sportFacilities: SportFacilitiesDto[];

    sportFacilitiesGroups: ExercisesGroups[] = [];

    stateGroupOptions: Observable<ExercisesGroups[]>;


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

        // this.stateGroupOptions = this.sportFacilitiesGroups.get('stateGroup')!.valueChanges
        //     .pipe(
        //         startWith(''),
        //         map(value => this._filterGroup(value))
        //     );

        this.isLoadingResults = false;
        this.cdRef.detectChanges();
    }

    filterSearch() {
        let isPaid = null;
        if (this.selectedIsPaid == "unPaid") {
            isPaid = false;
        } else if (this.selectedIsPaid == "paid") {
            isPaid = true;
        }
        let searchFill: searchFilter = {
            category: this.selected,
            isPaid: isPaid,
            name: this.nameForm.value
        };
        this.changeEvent.emit(searchFill);
    }
    //
    // private _filterGroup(value: string): ExercisesGroups[] {
    //     if (value) {
    //         return this.sportFacilitiesGroups
    //             .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
    //             .filter(group => group.names.length > 0);
    //     }
    //
    //     return this.stateGroups;
    // }


}
