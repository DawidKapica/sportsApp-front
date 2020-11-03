import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    apiURL = 'http://localhost:8080';


    constructor(private httpClient: HttpClient, private router: Router) { }

    async get(url: string) {
        let dataBaseObject;
        await this.httpClient.get(this.apiURL + url).toPromise().then(data => { dataBaseObject = data['content']});
        console.log(dataBaseObject);
        return dataBaseObject;
    }

    async getFullObject(url: string) {
        let dataBaseObject = await this.httpClient.get(this.apiURL + url).toPromise();
        return dataBaseObject;
    }

    async post(url: string, body: [] = null) {
        let dataBaseObject;
        let postUrlTest = '/';
        console.log(this.apiURL + postUrlTest + url);
        await this.httpClient.post(this.apiURL + postUrlTest + url, body).toPromise()
            .then(data => { dataBaseObject = data['content']});
        return dataBaseObject;
    }

    async put(url: string, body: any) {
        let dataBaseObject;
        await this.httpClient.put(this.apiURL + url, body).toPromise().then(data => { dataBaseObject = data} );
        return dataBaseObject;
    }
}
