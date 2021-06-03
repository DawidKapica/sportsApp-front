import {Component, OnInit, ViewChild} from '@angular/core';
import {SectionMainCategoryViewComponent} from '../section-main-category-view/section-main-category-view.component';
import {categoryEnum} from '../categoryEnum';
import {ApiService} from '../service/api.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '@auth0/auth0-angular';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';


@Component({
    selector: 'app-main-user-site',
    templateUrl: './main-user-site.component.html',
    styleUrls: ['./main-user-site.component.css']
})
export class MainUserSiteComponent implements OnInit {

    @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

    @ViewChild('sectionCategory') sectionCategory: SectionMainCategoryViewComponent;

    isUserLoad: boolean = false;

    constructor(private api: ApiService, public auth: AuthService) {
        let x = this.auth.user$;
        let email = '';
        console.log(x);
        // x.forEach(e => console.log(e) );
        x.subscribe(e => this.checkUser(e.email))

        // console.log(this.api.userId)
        // this.isUserLoad = true;
    }

    async ngOnInit() {
        // let x = await this.api.getFullObject("/users");
        // console.log(x);
        // this.api.checkUser();

    }

    async checkUser(email: string){
        // let user:UserDto =  await this.api.get(Mapping.USER+Mapping.SEARCH+'email=' + email) as UserDto;
        // if (user == null) {
        //
        // } else {
        //     this.api.setUserId(user[0].id);
        // }
        //
        // console.log(user[0].id);
        console.log("xxx")

        this.isUserLoad = true;
    }

    changeOther($event): void {

        this.sectionCategory.changeCategory($event)
    }



    public toogleNavBar() {
        this.sidenav.toggle();
    }


}

interface choosenCategory {
    name: string,
    isOn: boolean
}
