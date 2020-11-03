import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryMessageComponent} from './category-message/category-message.component';
import {CategorySettingComponent} from '../module-category-setting/category-setting/category-setting.component';



@NgModule({
  declarations: [
      CategoryMessageComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        CategoryMessageComponent
    ]
})
export class ModuleCategoryMessageModule { }
