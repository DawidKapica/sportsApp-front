import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindExpertComponent} from './find-expert/find-expert.component';
import {CategoryAboutMeComponent} from '../module-category-about-me/category-about-me/category-about-me.component';
import { FiltersFieldComponent } from './filters-field/filters-field.component';
import { SingleExpertComponent } from './single-expert/single-expert.component';
import { ExpertListComponent } from './expert-list/expert-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { DialogElementComponent } from './dialog-element/dialog-element.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSendMessageComponent } from './dialog-send-message/dialog-send-message.component';


@NgModule({
    declarations: [FindExpertComponent, FiltersFieldComponent, SingleExpertComponent, ExpertListComponent, DialogElementComponent, DialogSendMessageComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatDialogModule,
    ],
    exports: [
        FindExpertComponent
    ]
})
export class ModuleFindExpertModule {
}
