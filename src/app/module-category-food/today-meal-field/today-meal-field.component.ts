import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {DatePipe} from '@angular/common';
import {Time} from '@angular/common';
import {GenericInputFieldComponent} from '../../module-category-gym/generic-input-field/generic-input-field.component';
import {TodayMealTableComponent} from '../today-meal-table/today-meal-table.component';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-today-meal-field',
    templateUrl: './today-meal-field.component.html',
    styleUrls: ['./today-meal-field.component.css']
})
export class TodayMealFieldComponent implements OnInit {

    @Input()
    eatenFoods: mealNutritionalValInterface[] = [];


    dateForm = new FormControl(new Date());

    today: Date;
    formattedToday: string;
    eatenAllFoods: mealNutritionalValInterface[] = [];
    eatenMorningFoods: mealNutritionalValInterface[] = [];
    eatenAfternoonFoods: mealNutritionalValInterface[] = [];
    eatenEveningFoods: mealNutritionalValInterface[] = [];

    refresh = true;

    constructor(private changeRef: ChangeDetectorRef) {

    }


    ngOnInit(): void {
        this.today = new Date();
        const datepipe: DatePipe = new DatePipe('en-US');
        this.formattedToday = datepipe.transform(this.today, 'yyy-MM-dd');
        this.fillEatenFoodsForChooseDate(new Date());
    }

    events: string[] = [];

    fillEatenFoodsForChooseDate(choosenDate: Date): void {
        this.eatenAllFoods = [];
        this.eatenMorningFoods = [];
        this.eatenAfternoonFoods = [];
        this.eatenEveningFoods = [];

        let choosenDateString: string = '';
        const datepipe: DatePipe = new DatePipe('en-US');
        choosenDateString = datepipe.transform(choosenDate, 'yyy-MM-dd');

        for (let eatenFoodLine of this.eatenFoods) {
            let lineDate = eatenFoodLine.consumedFoodDate;
            let lineDateFormatted: string = datepipe.transform(lineDate, 'yyy-MM-dd');

            if (lineDateFormatted == choosenDateString) {
                this.eatenAllFoods.push(eatenFoodLine);
                // console.log(eatenFoodLine);
                if (eatenFoodLine.consumedFoodTime != null) {
                    // let morningEndTime = new Date() > 4;
                    if (eatenFoodLine.consumedFoodTime.hours < 12) {
                        this.eatenMorningFoods.push(eatenFoodLine);
                    } else if (eatenFoodLine.consumedFoodTime.hours < 19) {
                        this.eatenAfternoonFoods.push(eatenFoodLine);
                    } else {
                        this.eatenEveningFoods.push(eatenFoodLine);
                    }
                }
            }
        }

        // this.todayMealTable.eatenFoods = this.eatenAllFoods;
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.fillEatenFoodsForChooseDate(event.value);
        console.log(this.eatenAllFoods)
    }

    todayClick() {
        this.dateForm.setValue(new Date());
        this.fillEatenFoodsForChooseDate(new Date());
    }
}
