import {Component, OnInit, ViewChild} from '@angular/core';
import {SectionMainCategoryViewComponent} from '../section-main-category-view/section-main-category-view.component';
import {categoryEnum} from '../categoryEnum';

@Component({
    selector: 'app-main-user-site',
    templateUrl: './main-user-site.component.html',
    styleUrls: ['./main-user-site.component.css']
})
export class MainUserSiteComponent implements OnInit {

    @ViewChild('sectionCategory') sectionCategory: SectionMainCategoryViewComponent;
    constructor() {
    }

    ngOnInit(): void {
    }

    changeOther($event): void {
        console.log($event);
        console.log('');
        // if ($event == categoryEnum.fitness) {
        //     this.sectionCategory.gym = true;
        //     this.sectionCategory.food = false;
        // }
        // if ($event == categoryEnum.food) {
        //     this.sectionCategory.changeCategory(enum) = false;
        //     this.sectionCategory.food = true;
        // }
        this.sectionCategory.changeCategory($event)
    }

}

interface choosenCategory {
    name: string,
    isOn: boolean
}
