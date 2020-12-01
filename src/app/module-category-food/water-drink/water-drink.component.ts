import {Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';

@Component({
    selector: 'app-water-drink',
    templateUrl: './water-drink.component.html',
    styleUrls: ['./water-drink.component.css']
})
export class WaterDrinkComponent implements OnInit {

    @Input()
    waterConsumed: number;

    @Input()
    dailyWaterRequirement: number = 2000;

    activePercent: number;

    constructor() {
    }

    ngOnInit(): void {
    }

    percentOfWaterConsumed(): number {
        return this.waterConsumed/this.dailyWaterRequirement * 100;
    }

}
