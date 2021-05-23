import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryFoodComponent} from './category-food/category-food.component';
import { FoodEatenFieldComponent } from './food-eaten-field/food-eaten-field.component';
import { SearchProductFieldComponent } from './search-product-field/search-product-field.component';
import { NutritionalTrendsComponent } from './nutritional-trends/nutritional-trends.component';
import { HistoryEatenFoodComponent } from './history-eaten-food/history-eaten-food.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TodayMealFieldComponent } from './today-meal-field/today-meal-field.component';
import { WaterDrinkComponent } from './water-drink/water-drink.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { TodayMealTableComponent } from './today-meal-table/today-meal-table.component';
import { CaloriesHistoryChartComponent } from './calories-history-chart/calories-history-chart.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ApiService} from '../service/api.service';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [
      CategoryFoodComponent,
      FoodEatenFieldComponent,
      SearchProductFieldComponent,
      NutritionalTrendsComponent,
      HistoryEatenFoodComponent,
      TodayMealFieldComponent,
      WaterDrinkComponent,
      TodayMealTableComponent,
      CaloriesHistoryChartComponent,

  ],
    imports: [
        CommonModule,
        MatProgressBarModule,
        NgCircleProgressModule.forRoot({
            'backgroundStrokeWidth': 0,
            'backgroundPadding': 9,
            'radius': 71,
            'toFixed': 0,
            'outerStrokeWidth': 4,
            'animationDuration': 500,
            'responsive': true
        }),
        MatButtonModule,
        MatInputModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatRadioModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        NgxMaterialTimepickerModule,
        ChartsModule

    ],
    exports: [
        CategoryFoodComponent
    ],
    providers: [ApiService]

})
export class ModuleCategoryFoodModule { }
