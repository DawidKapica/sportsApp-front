import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {SectionMainCategoryViewComponent} from '../section-main-category-view/section-main-category-view.component';
import {categoryEnum} from '../categoryEnum';
import {ApiService} from '../service/api.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '@auth0/auth0-angular';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';
import {ExpertDto} from '../dataBaseObjects/ExpertDto';
import {DialogElementComponent} from '../module-find-expert/dialog-element/dialog-element.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {doubleInformationAndType} from '../interfaceComunicationObjects/doubleInformationAndType';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
    selector: 'app-main-user-site',
    templateUrl: './main-user-site.component.html',
    styleUrls: ['./main-user-site.component.css']
})
export class MainUserSiteComponent implements OnInit {

    @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

    @ViewChild('sectionCategory') sectionCategory: SectionMainCategoryViewComponent;

    isUserLoad: boolean = false;
    emailValue;
    users:UserDto[] = null;
    experts: ExpertDto[] = null;
    isUser = null;
    userId = null;

    constructor(private api: ApiService, public auth: AuthService, public dialog: MatDialog) {

        // this.isUserLoad = true;

    }

    async ngOnInit() {
        this.users = await this.api.get(Mapping.USER);
        this.experts = await this.api.get(Mapping.EXPERT);
        let x = this.auth.user$;
        // let email = '';
        // console.log(x);
        x.subscribe(e => this.checkUser(e.email) );


        // let x = await this.api.getFullObject("/users");
        // console.log(x);
        // this.api.checkUser();

    }

    async checkUser(email ){

        console.log( email.toString());
        // this.api.checkUser();

        let zxc = this.users.filter(a => a.email == email.toLowerCase() );
        console.log(zxc);
        console.log(this.users);
        if (zxc === null || zxc === [] || zxc === undefined || zxc.length == 0) {
            // let experts: ExpertDto[] = await this.api.get(Mapping.EXPERT);
            let expertFilter = this.experts.filter(a => a.mail.toLowerCase() == email.toLowerCase() )
            console.log(expertFilter);
            console.log(this.experts);
            if (expertFilter == null || expertFilter.length == 0) {
                this.isUser = true;
                let userId = null;
                const dialogRef = this.dialog.open(RegisterDialogComponent, {data: email.toString()});
                dialogRef.afterClosed().subscribe(result => {
                    userId = result;
                    this.userId = result;
                    console.log(result);
                });
                console.log(userId);
                this.userId = userId;
                // dialogRef.close();

                this.api.setUserId(userId, true);

                if (this.userId != null) {
                    dialogRef.close();
                }
            } else {
                this.isUser = false;
                this.api.setUserId(expertFilter[0].id, false);
            }
        } else {
            this.api.setUserId(zxc[0].id, true);
            this.isUser = true;
        }
        this.api.message = email.toString();
        this.isUserLoad = true;
        // this.api.checkUser("kkk")
        // this.isUserLoad = true;
    }

    // async checkUser(email: string){
    //     let user:UserDto =  await this.api.get(Mapping.USER+Mapping.SEARCH+'email=' + email) as UserDto;
    //     if (user == null) {
    //
    //     } else {
    //         this.api.setUserId(user[0].id);
    //     }
    //
    //     console.log(user[0].id);
    //     this.emailValue = email;
    //     console.log(email);
    //
    //
    //     this.isUserLoad = true;
    // }

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
