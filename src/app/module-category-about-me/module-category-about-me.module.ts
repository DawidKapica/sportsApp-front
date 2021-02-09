import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryAboutMeComponent} from './category-about-me/category-about-me.component';
import {CategoryFoodComponent} from '../module-category-food/category-food/category-food.component';
import {NewMesaurementComponent} from './new-mesaurement/new-mesaurement.component';
import {AccountSeetingsComponent} from './account-seetings/account-seetings.component';
import {SettingsFieldComponent} from './settings-field/settings-field.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MeaseaureChartHistoryFieldComponent} from './measeaure-chart-history-field/measeaure-chart-history-field.component';
import { GoalsFieldComponent } from './goals-field/goals-field.component';


@NgModule({
    declarations: [
        CategoryAboutMeComponent,
        NewMesaurementComponent,
        AccountSeetingsComponent,
        SettingsFieldComponent,
        MeaseaureChartHistoryFieldComponent,
        GoalsFieldComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
    ],
    exports: [
        CategoryAboutMeComponent
    ]
})
export class ModuleCategoryAboutMeModule {
}
