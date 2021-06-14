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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ModuleFindExpertModule} from './module-find-expert/module-find-expert.module';
import {ModuleFindSportFacilityModule} from './module-find-sport-facility/module-find-sport-facility.module';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {ModuleLoginModule} from './module-login/module-login.module';
import {environment} from '../environments/environment';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainUserSiteComponent,
        MainDiagramsComponent,
        MainCategoryButtonComponent,
        SectionMainButtonsComponent,
        SectionMainCategoryViewComponent,
        RegisterDialogComponent,
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
        MatSidenavModule,
        MatListModule,
        ModuleFindExpertModule,
        ModuleFindSportFacilityModule,
        AuthModule.forRoot({
            domain: 'dawidkapica.eu.auth0.com',
            clientId: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu',
            audience: 'https://sportsapp.com/api',
            httpInterceptor: {
                allowedList: [
                    // `${environment.dev.serverUrl}/experts`,
                    // `${environment.dev.serverUrl}/experts/*`,
                    // `${environment.dev.serverUrl}/experts/search?*`,

                    `http://localhost:8080/*`,
                    // `https://sportsapp-dawid-kapica.herokuapp.com/*`,

                    // `${environment.dev.serverUrl}/exercise-categories`,
            //         `${environment.dev.serverUrl}/users/*`,
            //         // // `${environment.dev.serverUrl}/users/search?`,
            //         //
            //         // // `http://localhost:8080/users/search?email=kadaw77@gmail.com`,
            //         //
            //         // // `${environment.dev.serverUrl}/users/search?email=kadaw77@gmail.com`,
            //         // `${environment.dev.serverUrl}/nutritional-products`,
            //         `${environment.dev.serverUrl}/exercises`,
            //         `${environment.dev.serverUrl}/parameters`,
            //         `${environment.dev.serverUrl}/sport-facilities`,
            //         `${environment.dev.serverUrl}/sport-facility-categories`,
                ]
            },
            // advancedOptions: {defaultScope: 'read:messages'},
            // scope: 'read:experts'
        }),
        // AuthModule.forRoot({
        //     // The domain and clientId were configured in the previous chapter
        //     domain: 'dawidkapica.eu.auth0.com',
        //     clientId: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu',
        //
        //     // Request this audience at user authentication time
        //     audience: 'https://dawidkapica.eu.auth0.com/api/v2/',
        //
        //     // Request this scope at user authentication time
        //     // scope: 'read:experts',
        //
        //     // Specify configuration for the interceptor
        //     httpInterceptor: {
        //         allowedList: [
        //             {
        //                 // Match any request that starts 'https://dawidkapica.eu.auth0.com/api/v2/' (note the asterisk)
        //                 uri: 'localhost:8080/experts',
        //                 tokenOptions: {
        //                 //     // The attached token should target this audience
        //                     audience: 'https://sportsapp.com/api',
        //                 //
        //                 //     // // The attached token should have these scopes
        //                 //     scope: 'read:experts'
        //                 }
        //             }
        //         ]
        //     }
        // }),
        ModuleLoginModule,
        MatSnackBarModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
