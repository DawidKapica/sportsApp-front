import {Component, OnInit, ViewChild} from '@angular/core';
import {SectionMainCategoryViewComponent} from '../section-main-category-view/section-main-category-view.component';
import {categoryEnum} from '../categoryEnum';
import {ApiService} from '../service/api.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
    selector: 'app-main-user-site',
    templateUrl: './main-user-site.component.html',
    styleUrls: ['./main-user-site.component.css']
})
export class MainUserSiteComponent implements OnInit {

    @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

    @ViewChild('sectionCategory') sectionCategory: SectionMainCategoryViewComponent;
    constructor(private api: ApiService) {
    }

    async ngOnInit() {
        let x = await this.api.getFullObject("/users");
        console.log(x);

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
