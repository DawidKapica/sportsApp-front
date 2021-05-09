import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import {AuthModule} from '@auth0/auth0-angular';



@NgModule({
  declarations: [LoginMainComponent],
  imports: [
    CommonModule,
      AuthModule.forRoot({
          domain: 'dawidkapica.eu.auth0.com',
          clientId: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu'
      })
  ]
})
export class ModuleLoginModule { }
