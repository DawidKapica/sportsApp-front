import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

@Component({
    selector: 'app-today-meal-table',
    templateUrl: './today-meal-table.component.html',
    styleUrls: ['./today-meal-table.component.css']
})
export class TodayMealTableComponent implements OnInit, OnChanges {
    mealNutritionalVal: mealNutritionalValInterface[];

    isAnyResults = true;
    @Input()
    set eatenFoods(mealNutritionalValInterfaceTab: mealNutritionalValInterface[]) {
        this.mealNutritionalVal = mealNutritionalValInterfaceTab;

    }



    displayedColumns: string[] = ['Nazwa', 'Ilosc', 'Kategoria', 'Godzina', 'Kalorie'];

    constructor() {
        // this.changeRef.detectChanges();
        if(this.mealNutritionalVal == null || this.mealNutritionalVal == []) {
            this.isAnyResults = false;
        }
    }

    ngOnInit(): void {
        // console.log(this.eatenFoods);
    }

    ngOnChanges(val): void {
        // console.log('in ngOnChanges');
        if(this.mealNutritionalVal == null || this.mealNutritionalVal == []) {
            this.isAnyResults = false;
        }
    }

}
