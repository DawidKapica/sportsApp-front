import {Component, OnInit} from '@angular/core';
import {categoryEnum} from '../categoryEnum';
import {UserDto} from '../dataBaseObjects/UserDto';
import {Mapping} from '../dataBaseObjects/Mapping';
import {ApiService} from '../service/api.service';

@Component({
    selector: 'app-section-main-category-view',
    templateUrl: './section-main-category-view.component.html',
    styleUrls: ['./section-main-category-view.component.css']
})
export class SectionMainCategoryViewComponent implements OnInit {

    en: typeof categoryEnum = categoryEnum;

    isDataLoaded = false;

    openCategoryList: choosenCategory[] = [
        {name: categoryEnum.fitness, isOn: false},
        {name: categoryEnum.food, isOn: true},
        {name: categoryEnum.aboutMe, isOn: false},
        {name: categoryEnum.message, isOn: false},
        {name: categoryEnum.personSearch, isOn: false},
        {name: categoryEnum.sportFacilitySearch, isOn: false}
    ];

    constructor(private api: ApiService) {
    }

    async ngOnInit() {
            let user:UserDto =  await this.api.get(Mapping.USER+Mapping.SEARCH+'email=' + 'kadaw77@gmail.com') as UserDto;
            if (user == null) {

            } else {
                this.api.setUserId(user[0].id);
            }

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
