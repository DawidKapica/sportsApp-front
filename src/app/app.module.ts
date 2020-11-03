import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import {MainUserSiteComponent} from './main-user-site/main-user-site.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MainDiagramsComponent} from './main-diagrams/main-diagrams.component';
import {MainCategoryButtonComponent} from './category-button/main-category-button.component';
import {SectionMainButtonsComponent} from './section-main-buttons/section-main-buttons.component';
import {ChartsModule} from 'ng2-charts';
import {SectionMainCategoryViewComponent} from './section-main-category-view/section-main-category-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule} from '@angular/forms';
import {ModuleCategoryGymModule} from './module-category-gym/module-category-gym.module';
import {ModuleCategoryAboutMeModule} from './module-category-about-me/module-category-about-me.module';
import {ModuleCategoryFoodModule} from './module-category-food/module-category-food.module';
import {ModuleCategoryMessageModule} from './module-category-message/module-category-message.module';
import {ModuleCategorySettingModule} from './module-category-setting/module-category-setting.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainUserSiteComponent,
        MainDiagramsComponent,
        MainCategoryButtonComponent,
        SectionMainButtonsComponent,
        SectionMainCategoryViewComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        ChartsModule,
        NgbModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        ModuleCategoryGymModule,
        ModuleCategoryAboutMeModule,
        ModuleCategoryFoodModule,
        ModuleCategoryMessageModule,
        ModuleCategorySettingModule,
        HttpClientModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
