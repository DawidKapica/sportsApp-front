import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindSportFacilityComponent} from './find-sport-facility/find-sport-facility.component';
import {CategoryAboutMeComponent} from '../module-category-about-me/category-about-me/category-about-me.component';
import { MapComponent } from './map/map.component';
import { FiltersFieldComponent } from './filters-field/filters-field.component';


@NgModule({
    declarations: [FindSportFacilityComponent, MapComponent, FiltersFieldComponent],
    imports: [
        CommonModule
    ],
    exports: [
        FindSportFacilityComponent
    ]
})
export class ModuleFindSportFacilityModule {
}
