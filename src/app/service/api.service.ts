import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';

interface Messagex {
    message: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

    apiURL = 'http://localhost:8080';
    // webURL = 'http://localhost:4200';
    webURL = 'https://sportsapp-dk.herokuapp.com';
    public userId;
    public isUser:boolean;

    // auth0 = null;
    accessToken = null;

    message;

    constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService) { }

    // async get(url: string) {
    //     let dataBaseObject;
    //     await this.httpClient.get(this.apiURL + url).toPromise().then(data => { dataBaseObject = data['content']});
    //     console.log(dataBaseObject);
    //     return dataBaseObject;
    // }
    //
    // async getFullObject(url: string) {
    //     let dataBaseObject = await this.httpClient.get(this.apiURL + url).toPromise();
    //     return dataBaseObject;
    // }

    async loginWithRedirect() {

        this.authService.loginWithRedirect( {redirect_uri: this.webURL } );

        // let user: any = await this.authService.user$;
        // console.log(user.name)
        // this.authService.idTokenClaims$.subscribe((claims) => console.log(claims));
        //
        //
        //
        // this.accessToken = await this.auth0.getTokenSilently();
        //
        // debugger
        // console.log(this.accessToken)

    }

    // async get(url: string) {
    //     let dataBaseObject;
    //     // let authToken = await this.authService.getAccessTokenWithPopup();
    //
    //     await this.httpClient.get(this.apiURL + url, {
    //
    //     headers: new HttpHeaders().set('Authorization', `Bearer ` + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik0zOUtlUHo3TW5QQ05nc3lObHlNeiJ9.eyJpc3MiOiJodHRwczovL2Rhd2lka2FwaWNhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zcG9ydHNhcHAuY29tL2FwaSIsImlhdCI6MTYyMjMyNzI5MywiZXhwIjoxNjIyNDEzNjkzLCJhenAiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.Qqcab7FWQX3wSQ2w4tHVIAtB1nYBuoX4zyZIbk8fqw9roIKoOfVi7WJ32IuMTKMwkoNBqOa__8sI6UdjwakkngX0lHgnbDmbMd8B-KOyDt-JILRskDBbwlOZqdHyfI6lZS6q8kRhDp72v_AqZ9KJNovSoTyOfq8DcI2L7Rz2_8_dPT6A6XWq2i0Okx105jbHpb3Av8zoYoNKyUBia3V_LHADmhJ27CAUM5D9MQjOKe5kuGq0XWnRKd1NwXhk1nTNzkQUQnh2_itWaaAu0DQ7B4bdqov8lOKGkSlgMNCSRYIFhDqhRxub0QRMf0pyNyL7uJQv6CWDRajSKpXusA9WGg')
    //     }).toPromise().then(data => { dataBaseObject = data['content']});
    //     console.log(dataBaseObject);
    //
    //     return dataBaseObject;
    // }
    //
    // async getFullObject(url: string) {
    //
    //     let dataBaseObject = await this.httpClient.get(this.apiURL + url, {
    //         headers: new HttpHeaders().set('Authorization', `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik0zOUtlUHo3TW5QQ05nc3lObHlNeiJ9.eyJpc3MiOiJodHRwczovL2Rhd2lka2FwaWNhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zcG9ydHNhcHAuY29tL2FwaSIsImlhdCI6MTYyMjMyNzI5MywiZXhwIjoxNjIyNDEzNjkzLCJhenAiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.Qqcab7FWQX3wSQ2w4tHVIAtB1nYBuoX4zyZIbk8fqw9roIKoOfVi7WJ32IuMTKMwkoNBqOa__8sI6UdjwakkngX0lHgnbDmbMd8B-KOyDt-JILRskDBbwlOZqdHyfI6lZS6q8kRhDp72v_AqZ9KJNovSoTyOfq8DcI2L7Rz2_8_dPT6A6XWq2i0Okx105jbHpb3Av8zoYoNKyUBia3V_LHADmhJ27CAUM5D9MQjOKe5kuGq0XWnRKd1NwXhk1nTNzkQUQnh2_itWaaAu0DQ7B4bdqov8lOKGkSlgMNCSRYIFhDqhRxub0QRMf0pyNyL7uJQv6CWDRajSKpXusA9WGg`)
    //     }).toPromise();
    //
    //     // this.auth0 = await createAuth0Client({
    //     //     domain: 'dawidkapica.eu.auth0.com',
    //     //     client_id: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu'
    //     // });
    //
    //     return dataBaseObject;
    //     // return null;
    // }

    async get(url: string) {

        let dataBaseObject;

        console.log(this.message);

        await this.httpClient.get(this.apiURL + url ).toPromise().then(data => { dataBaseObject = data['content']});
        // console.log(dataBaseObject);

        // console.log(this.isUser);

        return dataBaseObject;
    }

    async getFullObject(url: string) {

        let dataBaseObject = await this.httpClient.get(this.apiURL + url).toPromise();

        // this.auth0 = await createAuth0Client({
        //     domain: 'dawidkapica.eu.auth0.com',
        //     client_id: 'g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu'
        // });

        return dataBaseObject;
        // return null;
    }

    checkUser(val: string){
    //
    //     let x = await this.authService.user$;
    //     let email = '';
    // //     console.log(x);
    //     x.forEach(e => async function f() {
    //         email = await e.email;
    //     } );
        // await x.subscribe(e => email = e.name)
    //
    //
        let user = this.get(Mapping.USER);

    //     console.log(this.apiURL + Mapping.USER+Mapping.SEARCH+'email=' + email)
    //     this.userId = user.id;

    //     console.log(email)
    //     console.log(this.userId);
    //     console.log(user);
    //     return this.userId;
    //
    }

    setUserId(userId: number, isUser) {
        this.userId = userId;
        this.isUser = isUser;
    }

    getUserId(): number {
        return this.userId;
    }

    // async post(url: string, body: any = null) {
    //     let dataBaseObject;
    //     let postUrlTest = '';
    //     console.log(this.apiURL + postUrlTest + url);
    //     await this.httpClient.post(this.apiURL + postUrlTest + url, body, {headers: new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik0zOUtlUHo3TW5QQ05nc3lObHlNeiJ9.eyJpc3MiOiJodHRwczovL2Rhd2lka2FwaWNhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9zcG9ydHNhcHAuY29tL2FwaSIsImlhdCI6MTYyMjMyNzI5MywiZXhwIjoxNjIyNDEzNjkzLCJhenAiOiJ3bUVveTAyTHJMZmxCR3VyMEM4cm1FNzB6MUhIZHRrcSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.Qqcab7FWQX3wSQ2w4tHVIAtB1nYBuoX4zyZIbk8fqw9roIKoOfVi7WJ32IuMTKMwkoNBqOa__8sI6UdjwakkngX0lHgnbDmbMd8B-KOyDt-JILRskDBbwlOZqdHyfI6lZS6q8kRhDp72v_AqZ9KJNovSoTyOfq8DcI2L7Rz2_8_dPT6A6XWq2i0Okx105jbHpb3Av8zoYoNKyUBia3V_LHADmhJ27CAUM5D9MQjOKe5kuGq0XWnRKd1NwXhk1nTNzkQUQnh2_itWaaAu0DQ7B4bdqov8lOKGkSlgMNCSRYIFhDqhRxub0QRMf0pyNyL7uJQv6CWDRajSKpXusA9WGg')}).toPromise()
    //         .then(data => { dataBaseObject = data['content']});
    //     return dataBaseObject;
    //
    //     // this._snackBar.open('Wartość dodana pomyślnie');
    //
    // }
    async post(url: string, body: any = null) {
        let dataBaseObject;
        let postUrlTest = '';
        // console.log(this.apiURL + postUrlTest + url);
        await this.httpClient.post(this.apiURL + postUrlTest + url, body).toPromise()
            .then(data => { dataBaseObject = data['content']});
        return dataBaseObject;

        // this._snackBar.open('Wartość dodana pomyślnie');
    }

    async postFullObject(url: string, body: any = null) {
        let dataBaseObject;
        let postUrlTest = '';
        // console.log(body);

        dataBaseObject = await this.httpClient.post(this.apiURL + postUrlTest + url, body).toPromise();
        return dataBaseObject;

        // this._snackBar.open('Wartość dodana pomyślnie');

    }

    async put(url: string, body: any) {
        let dataBaseObject;
        await this.httpClient.put(this.apiURL + url, body).
        toPromise().then(data => { dataBaseObject = data} );
        return dataBaseObject;
    }

    async delete(url: string) {
        let dataBaseObject;
        await this.httpClient.delete(this.apiURL + url).
        toPromise().then(data => { dataBaseObject = data} );
        return dataBaseObject;

        // console.log(this.apiURL + url)
        // console.log(dataBaseObject)
    }



}
