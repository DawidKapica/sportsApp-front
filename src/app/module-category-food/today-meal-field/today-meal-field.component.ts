import {Component, Input, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';


@Component({
  selector: 'app-today-meal-field',
  templateUrl: './today-meal-field.component.html',
  styleUrls: ['./today-meal-field.component.css']
})
export class TodayMealFieldComponent implements OnInit {

    @Input()
    eatenFoods: mealNutritionalValInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }
    events: string[] = [];

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.events.push(`${type}: ${event.value}`);
    }
}
