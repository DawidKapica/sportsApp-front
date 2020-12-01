import {Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

@Component({
    selector: 'app-history-eaten-food',
    templateUrl: './history-eaten-food.component.html',
    styleUrls: ['./history-eaten-food.component.css']
})
export class HistoryEatenFoodComponent implements OnInit {

    @Input()
    eatenFoods: mealNutritionalValInterface[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}
