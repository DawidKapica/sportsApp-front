import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryAboutMeComponent} from './category-about-me/category-about-me.component';
import {CategoryFoodComponent} from '../module-category-food/category-food/category-food.component';


@NgModule({
    declarations: [CategoryAboutMeComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CategoryAboutMeComponent
    ]
})
export class ModuleCategoryAboutMeModule {
}
