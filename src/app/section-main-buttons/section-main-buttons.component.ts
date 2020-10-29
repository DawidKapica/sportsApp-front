import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';
import {MainCategoryButtonComponent} from '../category-button/main-category-button.component';
import {categoryEnum} from '../categoryEnum';

@Component({
    selector: 'app-section-main-buttons',
    templateUrl: './section-main-buttons.component.html',
    styleUrls: ['./section-main-buttons.component.css']
})
export class SectionMainButtonsComponent implements AfterViewInit {

    @ViewChildren('buttons') buttonsComponent: QueryList<MainCategoryButtonComponent>;

    @Output()
    changeEvent = new EventEmitter<string>();

    buttons: buttonIconName[] = [
        {iconName: 'fitness_center', nameRef: categoryEnum.fitness},
        {iconName: 'restaurant', nameRef: categoryEnum.food},
        {iconName: 'person', nameRef: categoryEnum.aboutMe},
        {iconName: 'mail', nameRef: categoryEnum.message},
        {iconName: 'settings', nameRef: categoryEnum.setting},
    ];

    constructor(private cdRef:ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.buttonsComponent.first.click = true;
        this.cdRef.detectChanges();
    }

    changeOther($event): void {
        console.log($event);
        console.log('ffff');
        for (let buttonComp of this.buttonsComponent) {
            if (buttonComp.buttonName != $event) {
                buttonComp.click = false;
            } else if (buttonComp.buttonName == $event) {
                buttonComp.click = true;
                this.sendInfromation($event)

            }
            console.log(buttonComp.buttonName + buttonComp.click);
        }

    }

    sendInfromation(category: string) {
        this.changeEvent.emit(category)
    }


}

// tslint:disable-next-line:class-name
interface buttonIconName {
    iconName: string;
    nameRef: string;
}
