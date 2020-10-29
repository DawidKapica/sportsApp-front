import {Component, OnInit} from '@angular/core';
import {categoryEnum} from '../categoryEnum';

@Component({
    selector: 'app-section-main-category-view',
    templateUrl: './section-main-category-view.component.html',
    styleUrls: ['./section-main-category-view.component.css']
})
export class SectionMainCategoryViewComponent implements OnInit {

    en: typeof categoryEnum = categoryEnum;

    openCategoryList: choosenCategory[] = [
        {name: categoryEnum.fitness, isOn: true},
        {name: categoryEnum.food, isOn: false},
        {name: categoryEnum.aboutMe, isOn: false},
        {name: categoryEnum.message, isOn: false},
        {name: categoryEnum.setting, isOn: false},
    ];

    constructor() {
    }

    ngOnInit(): void {
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
