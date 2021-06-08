import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {UserDto} from '../../dataBaseObjects/UserDto';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {DatePipe} from '@angular/common';

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

    constructor(private changeRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.calcNutritionalValues();
    }

    calcNutritionalValues() {

        let today = new Date();
        if (this.eatenFoods != undefined && this.eatenFoods != []) {
            let choosenDateString: string = '';
            const datepipe: DatePipe = new DatePipe('en-US');
            choosenDateString = datepipe.transform(today, 'yyy-MM-dd');
            for (let meal of this.eatenFoods) {
                // if (meal.consumedFoodDate == today) {
                let lineDate = meal.consumedFoodDate;
                let lineDateFormatted: string = datepipe.transform(lineDate, 'yyy-MM-dd');

                if (lineDateFormatted == choosenDateString) {
                    this.carbohydrates = this.carbohydrates + meal.carbohydrates;
                    this.proteins = this.proteins + meal.proteins;
                    this.fat = this.fat + meal.fats;
                    this.calories = this.calories + meal.calories;
                }
            }
        }

        if (this.userData != undefined && this.userData != null) {
            this.percentOfDailyCal = Math.round(this.calories / this.userData.dailyCalRequirement * 100 * 100)/100;
            this.percentOfCarbohydrates = Math.round(this.carbohydrates / this.userData.dailyCarbRequirement * 100 *100)/100;
            this.percentOfProteins =  Math.round(this.proteins / this.userData.dailyProtRequirement * 100 * 100)/100;
            this.percentOfFats =  Math.round(this.fat / this.userData.dailyFatRequirement * 100 * 100)/100;
        }

    }

    addMeal(eatenMeal: mealNutritionalValInterface[]) {
        if (eatenMeal != null) {
            for (let i = 0; i < eatenMeal.length; i++) {
                this.carbohydrates = this.carbohydrates + eatenMeal[i].carbohydrates;
                this.proteins = this.proteins + eatenMeal[i].proteins;
                this.fat = this.fat + eatenMeal[i].fats;
                this.calories = this.calories + eatenMeal[i].calories;
                this.percentOfDailyCal = Math.round(this.calories / this.userData.dailyCalRequirement * 100 * 100)/100;
                this.percentOfCarbohydrates = Math.round(this.carbohydrates / this.userData.dailyCarbRequirement * 100 *100)/100;
                this.percentOfProteins =  Math.round(this.proteins / this.userData.dailyProtRequirement * 100 * 100)/100;
                this.percentOfFats =  Math.round(this.fat / this.userData.dailyFatRequirement * 100 * 100)/100;
            }
        }
        // this.calcNutritionalValues();
        this.changeRef.detectChanges()
    }



}
