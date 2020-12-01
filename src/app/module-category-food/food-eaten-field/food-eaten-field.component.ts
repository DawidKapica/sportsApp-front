import {Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

@Component({
    selector: 'app-food-eaten-field',
    templateUrl: './food-eaten-field.component.html',
    styleUrls: ['./food-eaten-field.component.css']
})
export class FoodEatenFieldComponent implements OnInit {

    @Input()
    eatenFoods: mealNutritionalValInterface[] = [];

    carbohydrates: number = 0;
    proteins: number = 0;
    fat: number = 0;
    calories: number = 0;
    percentOfDailyCal = 0;
    percentOfProteins = 0;
    percentOfFats = 0;
    percentOfCarbohydrates = 0;

    // isDataReady = false;

    constructor() {
    }

    ngOnInit(): void {
        this.calcNutritionalValues();
    }

    calcNutritionalValues() {
        if (this.eatenFoods != undefined && this.eatenFoods != []) {
            for (let meal of this.eatenFoods) {
                this.carbohydrates = this.carbohydrates + meal.carbohydrates;
                this.proteins = this.proteins + meal.proteins;
                this.fat = this.fat + meal.fats;
                this.calories = this.calories + meal.calories;
            }
        }
        this.percentOfDailyCal = this.calories/2000 * 100;
        this.percentOfCarbohydrates = this.carbohydrates/134 * 100;
        this.percentOfProteins = this.proteins/114 * 100;
        this.percentOfFats = this.fat/97 *100
    }

}
