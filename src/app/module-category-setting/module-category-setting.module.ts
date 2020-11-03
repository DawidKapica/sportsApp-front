import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategorySettingComponent} from './category-setting/category-setting.component';



@NgModule({
  declarations: [
      CategorySettingComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        CategorySettingComponent
    ]
})
export class ModuleCategorySettingModule { }
