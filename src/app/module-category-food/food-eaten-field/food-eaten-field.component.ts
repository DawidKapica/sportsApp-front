import {Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
    selector: 'app-food-eaten-field',
    templateUrl: './food-eaten-field.component.html',
    styleUrls: ['./food-eaten-field.component.css']
})
export class FoodEatenFieldComponent implements OnInit {

    @Input()
    eatenFoods: mealNutritionalValInterface[] = [];

    @Input()
    userData: UserDto;

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

        console.log(this.carbohydrates);
        console.log(this.proteins);
        console.log(this.fat);
        console.log(this.percentOfDailyCal);
        console.log(this.percentOfCarbohydrates)
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

        console.log(this.userData);
        if (this.userData != undefined && this.userData != null) {
            this.percentOfDailyCal = this.calories / this.userData.dailyCalRequirement * 100;
            this.percentOfCarbohydrates = this.carbohydrates / this.userData.dailyCarbRequirement * 100;
            this.percentOfProteins = this.proteins / this.userData.dailyProtRequirement * 100;
            this.percentOfFats = this.fat / this.userData.dailyFatRequirement * 100
        }
    }

}
