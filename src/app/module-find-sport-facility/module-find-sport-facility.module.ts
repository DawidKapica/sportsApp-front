import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindSportFacilityComponent} from './find-sport-facility/find-sport-facility.component';
import {CategoryAboutMeComponent} from '../module-category-about-me/category-about-me/category-about-me.component';
import { MapComponent } from './map/map.component';
import { FiltersFieldComponent } from './filters-field/filters-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
    declarations: [FindSportFacilityComponent, MapComponent, FiltersFieldComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatAutocompleteModule,

    ],
    exports: [
        FindSportFacilityComponent
    ]
})
export class ModuleFindSportFacilityModule {
}
