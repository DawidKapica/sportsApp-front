import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryGymComponent} from './category-gym/category-gym.component';
import {GenericInputFieldComponent} from './generic-input-field/generic-input-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {ChartsModule} from 'ng2-charts';
import {ApiService} from '../service/api.service';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        CategoryGymComponent,
        GenericInputFieldComponent,
        MyLineChartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,

    ],
    exports: [
        CategoryGymComponent,
    ],
    providers: [ApiService]
})
export class ModuleCategoryGymModule {
}
