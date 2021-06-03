import { Component, OnInit, Inject } from '@angular/core';
import {MainUserSiteComponent} from '../main-user-site/main-user-site.component';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Mapping} from '../dataBaseObjects/Mapping';
import {ExpertDto} from '../dataBaseObjects/ExpertDto';
import {ApiService} from '../service/api.service';
import {UserDto} from '../dataBaseObjects/UserDto';

interface Messagex {
    message: string;
}


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent  {

  // constructor() { }
  //
    profileJson: string = null;
    metadata = {};
    experts: ExpertDto;

  async ngOnInit(){
      this.experts = await this.api.get(Mapping.EXPERT);

      let user:UserDto =  await this.api.getFullObject(Mapping.USER+Mapping.SEARCH+'email=' + 'kadaw77@gmail.com') as UserDto;
        console.log(user);

      // }
  }

    message: string = null;

    constructor(private comp: MainUserSiteComponent, @Inject(DOCUMENT) public document: Document, public auth: AuthService, private http: HttpClient, private api: ApiService) {

    }

    callApi(): void {
        this.auth.getAccessTokenSilently();
        this.http
            .get(`http://localhost:8080/experts/`)
            .subscribe((result: Messagex) => {
                console.log(result);
                this.message = result.message;
            });

        console.log(this.message);

        console.log(this.experts);
    }

    callSecureApi(): void {
        this.http
            .get(`${environment.dev.serverUrl}/experts`)
            .subscribe((result: Messagex) => {
                this.message = result.message;
            });
        console.log(this.message);
    }

    public toogleSideNav() {
        this.comp.toogleNavBar();
        let x = this.auth.user$;
        x.forEach(e => console.log(e));

    }

    loginWithRedirect(): void {
        // Call this to redirect the user to the login page
        this.auth.loginWithRedirect( { returnTo: '/login' } );

        this.auth.idTokenClaims$.subscribe((claims) => console.log(claims));
    }

    logout(): void {
        // Call this to log the user out of the application
        this.auth.logout({ returnTo: window.location.origin });
    }

}
