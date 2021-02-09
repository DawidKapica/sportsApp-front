import {Component, OnInit} from '@angular/core';
import {doubleInformationAndType} from '../../interfaceComunicationObjects/doubleInformationAndType';

@Component({
    selector: 'app-category-about-me',
    templateUrl: './category-about-me.component.html',
    styleUrls: ['./category-about-me.component.css']
})
export class CategoryAboutMeComponent implements OnInit {

    actualMeasurmentArray: doubleInformationAndType[] = [];

    isLoadingResults = true;

    constructor() {
    }

    ngOnInit(): void {
        let actualMeasures = null; // api.get...

        this.actualMeasurmentArray.push({
                firsrtFieldName: 'waga',
                secondFieldName: '75.0',
                formControlName: 'weight'
            },
            {
                firsrtFieldName: 'obwod bicepsa',
                secondFieldName: '38.0',
                formControlName: 'currBiceps'
            }
        );
        this.isLoadingResults = false;
    }

}
