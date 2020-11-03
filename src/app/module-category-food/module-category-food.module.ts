import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryFoodComponent} from './category-food/category-food.component';
import {CategoryMessageComponent} from '../module-category-message/category-message/category-message.component';



@NgModule({
  declarations: [
      CategoryFoodComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        CategoryFoodComponent
    ]
})
export class ModuleCategoryFoodModule { }
