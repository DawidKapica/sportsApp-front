import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainUserSiteComponent} from './main-user-site/main-user-site.component';

const routes: Routes = [
  {path: '**', component: MainUserSiteComponent},
  {path: '', component: MainUserSiteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
