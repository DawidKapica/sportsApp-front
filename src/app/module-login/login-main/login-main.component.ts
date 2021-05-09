import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',

  styleUrls: ['./login-main.component.css'],
})
export class LoginMainComponent implements OnInit {

    constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

    loginWithRedirect(): void {
        // Call this to redirect the user to the login page
        this.auth.loginWithRedirect( {redirect_uri: 'http://localhost:4200/login' } );

        this.auth.idTokenClaims$.subscribe((claims) => console.log(claims));
    }
    //
    // logout(): void {
    //     // Call this to log the user out of the application
    //     this.auth.logout({ returnTo: window.location.origin });
    // }


}
