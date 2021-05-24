import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {DatePipe} from '@angular/common';
import {FormControl} from '@angular/forms';

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

    custumWaterFalue: FormControl = new FormControl();

    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    percentOfWaterConsumed(): number {
        // console.log(this.waterConsumed)
        return this.waterConsumed/this.dailyWaterRequirement * 100;
    }

    add250ml() {
        this.addWater(250);
    }

    add500ml() {
        this.addWater(500);
    }

    addCustomWater() {
        if (this.custumWaterFalue.value != null && this.custumWaterFalue.value != 0) {
            this.addWater(this.custumWaterFalue.value);
        }
    }

    addWater(value:number) {
        let actualDate = new Date();
        let formattedToday: string;
        // this.today = new Date();
        const datepipe: DatePipe = new DatePipe('en-US');
        formattedToday = datepipe.transform(actualDate, 'yyy-MM-dd');
        let waterFood: ConsumedFoodDto = {
            userId: this.api.userId,
            nutritionalProductId: 3,
            quantity: value,
            consumedFoodDate: actualDate,
            consumedFoodTime: null
        }
        this.api.post(Mapping.CONSUMED_FOOD, waterFood);

        this.waterConsumed = this.waterConsumed + value;
        this.cdRef.detectChanges();
    }



}
