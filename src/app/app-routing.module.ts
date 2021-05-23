import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainUserSiteComponent} from './main-user-site/main-user-site.component';
import {LoginMainComponent} from './module-login/login-main/login-main.component';
import {AuthGuard} from '@auth0/auth0-angular';

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

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
