import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-main-category-button',
    templateUrl: './main-category-button.component.html',
    styleUrls: ['./main-category-button.component.css']
})
export class MainCategoryButtonComponent implements OnInit {

    @Input()
    iconName: string;

    @Input()
    buttonName: string;

    @Output()
    changeEvent = new EventEmitter<string>();


    click: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    sendInfromation() {
        // this.click = !this.click;
        this.changeEvent.emit(this.buttonName)
    }

}
