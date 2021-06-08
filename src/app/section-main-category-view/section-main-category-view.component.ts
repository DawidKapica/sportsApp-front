import {Component, OnInit} from '@angular/core';
import {categoryEnum} from '../categoryEnum';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';
import {ApiService} from '../service/api.service';
import {AuthService} from '@auth0/auth0-angular';
import {ExpertDto} from '../dataBaseObjects/ExpertDto';

@Component({
    selector: 'app-section-main-category-view',
    templateUrl: './section-main-category-view.component.html',
    styleUrls: ['./section-main-category-view.component.css']
})
export class SectionMainCategoryViewComponent implements OnInit {

    en: typeof categoryEnum = categoryEnum;

    isDataLoaded = false;

    emailS;

    users:UserDto[] = null;

    isUser = null;

    openCategoryList: choosenCategory[] = [
        {name: categoryEnum.fitness, isOn: false},
        {name: categoryEnum.food, isOn: true},
        {name: categoryEnum.aboutMe, isOn: false},
        {name: categoryEnum.message, isOn: false},
        {name: categoryEnum.personSearch, isOn: false},
        {name: categoryEnum.sportFacilitySearch, isOn: false}
    ];
    currentUser;
    constructor(private api: ApiService, public auth: AuthService) {
        let x = this.auth.user$.toPromise();
        let email = '';
        // console.log(x.us);

        // x.forEach(e => this.c
        // this.checkUser(x) ;
        // let y = await x.toPromise()
        // this.checkUser("x");
        // console.log(y);
    }

    async checkUser(email ){

        console.log( email.toString());
        // this.api.checkUser();
        // this.auth.user$.forEach(e => );
        // let user:UserDto =  await this.api.get(Mapping.USER+Mapping.SEARCH+'email=' + email) as UserDto;
        // if (user == null) {
        //
        // } else {
        //     this.api.setUserId(user[0].id);
        // }
        //
        // console.log(user[0].id);
        // this.auth.user$.forEach(data => this.currentUser = data);
        // console.log(this.currentUser);
        // console.log(email)

        // let user = await this.api.get(Mapping.USER + Mapping.SEARCH + 'email=' + 'kadaw77@gmail.com');




        // let zxc = this.users.filter(a => a.email == email );
        // console.log(zxc);
        // console.log(this.users);
        // if (zxc == null) {
        //     let experts: ExpertDto[] = await this.api.get(Mapping.EXPERT);
        //     let expertFilter = experts.filter(a => a.mail == email )
        //     if (expertFilter == null) {
        //         this.isUser = false;
        //     }
        // } else {
        //     this.api.setUserId(zxc[0].id, true);
        //     this.isUser = true;
        // }
        // this.api.message = email.toString();
        // this.isDataLoaded = true;
        //

        this.isUser = this.api.isUser;


        // this.api.checkUser("kkk")
        // this.isUserLoad = true;
    }
    async ngOnInit() {
        // this.users = await this.api.get(Mapping.USER);
        //
        // let x = this.auth.user$;

        this.isUser = this.api.isUser;
        //
        // let email = '';
        // console.log(x);



        // x.subscribe(e => this.checkUser(e.email) );



        // x.subscribe(e => email = e.email);
        // this.checkUser("kadaw77@gmail.com")

// this.api.checkUser();

        // let user: UserDto = await this.api.get(Mapping.USER + Mapping.SEARCH + 'email=' + 'kadaw77@gmail.com') as UserDto;
        // if (user == null) {
        //
        // } else {
        //     this.api.setUserId(user[0].id);
        // }

        this.isDataLoaded = true;
    }

    changeCategory(category: categoryEnum) {
        for (let categoryChoosen of this.openCategoryList) {
            if (categoryChoosen.name == category) {
                categoryChoosen.isOn = true;

            } else {
                categoryChoosen.isOn = false;
            }
        }
    }

    isCatActive(value: string): boolean {
        for (let categoryChoosen of this.openCategoryList) {
            if (categoryChoosen.name == value) {
                return categoryChoosen.isOn;
            }
        }
        return false;
    }
}

interface choosenCategory {
    name: string,
    isOn: boolean
}
