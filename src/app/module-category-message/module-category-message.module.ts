import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryMessageComponent} from './category-message/category-message.component';
import {CategorySettingComponent} from '../module-category-setting/category-setting/category-setting.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesDisplayComponent } from './messages-display/messages-display.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
      CategoryMessageComponent,
      ContactsComponent,
      MessagesDisplayComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonToggleModule
    ],
    exports: [
        CategoryMessageComponent
    ]
})
export class ModuleCategoryMessageModule { }
