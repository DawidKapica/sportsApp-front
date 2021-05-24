import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryMessageComponent} from './category-message/category-message.component';
import {CategorySettingComponent} from '../module-category-setting/category-setting/category-setting.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesDisplayComponent } from './messages-display/messages-display.component';



@NgModule({
  declarations: [
      CategoryMessageComponent,
      ContactsComponent,
      MessagesDisplayComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        CategoryMessageComponent
    ]
})
export class ModuleCategoryMessageModule { }
