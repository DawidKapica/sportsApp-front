import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

@Component({
    selector: 'app-today-meal-table',
    templateUrl: './today-meal-table.component.html',
    styleUrls: ['./today-meal-table.component.css']
})
export class TodayMealTableComponent implements OnInit, OnChanges {
    mealNutritionalVal: mealNutritionalValInterface[];

    @Input()
    set eatenFoods(mealNutritionalValInterfaceTab: mealNutritionalValInterface[]) {
        this.mealNutritionalVal = mealNutritionalValInterfaceTab;

    }



    displayedColumns: string[] = ['Nazwa', 'Ilosc', 'Kategoria', 'Godzina', 'Kalorie'];

    constructor() {
        // this.changeRef.detectChanges();
    }

    ngOnInit(): void {
        // console.log(this.eatenFoods);
    }

    ngOnChanges(val): void {
        // console.log('in ngOnChanges');
    }

}
