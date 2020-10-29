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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ChartComponent} from './chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';
import {SectionMainCategoryViewComponent} from './section-main-category-view/section-main-category-view.component';
import {CategoryGymComponent} from './category-gym/category-gym.component';
import {CategoryFoodComponent} from './category-food/category-food.component';
import {CategoryAboutMeComponent} from './category-about-me/category-about-me.component';
import {CategorySettingComponent} from './category-setting/category-setting.component';
import {CategoryMessageComponent} from './category-message/category-message.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainUserSiteComponent,
        MainDiagramsComponent,
        MainCategoryButtonComponent,
        SectionMainButtonsComponent,
        ChartComponent,
        MyLineChartComponent,
        SectionMainCategoryViewComponent,
        CategoryGymComponent,
        CategoryFoodComponent,
        CategoryAboutMeComponent,
        CategorySettingComponent,
        CategoryMessageComponent
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
