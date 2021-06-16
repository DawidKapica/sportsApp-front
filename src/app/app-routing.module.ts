import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainUserSiteComponent} from './main-user-site/main-user-site.component';
import {LoginMainComponent} from './module-login/login-main/login-main.component';
// import {AuthGuard} from '@auth0/auth0-angular';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '@auth0/auth0-angular';
// import {AuthGuard} from './AuthGuard';

const routes: Routes = [
    {
        path: 'home',
        component: MainUserSiteComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginMainComponent
    },
    {
        path: '**',
        component: MainUserSiteComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: '**',
    //     component: LoginMainComponent,
    //
    // },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // FormsModule,
    // ReactiveFormsModule],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
