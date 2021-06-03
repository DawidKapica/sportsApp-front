import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import {AuthModule} from '@auth0/auth0-angular';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [LoginMainComponent],
    imports: [
        CommonModule,
        AuthModule.forRoot({
            domain: 'dawidkapica.eu.auth0.com',
            clientId: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu'
        }),
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class ModuleLoginModule { }
