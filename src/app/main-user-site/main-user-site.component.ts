import {Component, OnInit, ViewChild} from '@angular/core';
import {SectionMainCategoryViewComponent} from '../section-main-category-view/section-main-category-view.component';
import {categoryEnum} from '../categoryEnum';
import {ApiService} from '../service/api.service';

@Component({
    selector: 'app-main-user-site',
    templateUrl: './main-user-site.component.html',
    styleUrls: ['./main-user-site.component.css']
})
export class MainUserSiteComponent implements OnInit {

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

}

interface choosenCategory {
    name: string,
    isOn: boolean
}
