import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Mapping} from '../../dataBaseObjects/Mapping';
import {ConsumedFoodDto} from '../../dataBaseObjects/ConsumedFoodDto';
import {NutritionalProductDto} from '../../dataBaseObjects/NutritionalProductDto';
import {mealNutritionalValInterface} from '../../interfaceComunicationObjects/mealNutritionalValInterface';
import {UserDto} from '../../dataBaseObjects/UserDto';


@Component({
    selector: 'app-category-food',
    templateUrl: './category-food.component.html',
    styleUrls: ['./category-food.component.css']
})
export class CategoryFoodComponent implements OnInit {

    todayUserConsumedFood: ConsumedFoodDto[];
    nutritionalProducts: NutritionalProductDto[];
    userData: Object;

    waterDrink: number;
    userMealNutritional: mealNutritionalValInterface[];
    isLoadingResults = true;


    constructor(private api: ApiService, private cdRef: ChangeDetectorRef) {

    }

    async ngOnInit() {
        await this.loadData();
        this.waterDrink = this.waterExtract(this.todayUserConsumedFood);
        this.userMealNutritional = this.dataAboutTodayProductExtract(this.todayUserConsumedFood);

        this.isLoadingResults = false;
        console.log(this.waterDrink);
        this.cdRef.detectChanges();
    }


    async loadData() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todayString = yyyy + '-' + mm + '-' + dd;
        let test20201010String = '2020-10-10';

        this.todayUserConsumedFood = await this.api.get(Mapping.CONSUMED_FOOD + Mapping.SEARCH + 'consumedFoodDate=' + test20201010String);
        this.nutritionalProducts = await this.api.get(Mapping.NUTRITIONAL_PRODUCT);
        this.userData = await this.api.getFullObject(Mapping.USER + '/3');

        console.log(this.userData);
    }

    waterExtract(consumedFoods: ConsumedFoodDto[]): number {
        let water: number = 0;
        let waterId: number;
        let mealProduct = this.nutritionalProducts.find(product => product.name === 'water');
        if (mealProduct !== undefined) {
            waterId = mealProduct.id;
            for (let meal of consumedFoods) {
                if (meal.nutritionalProductId === waterId) {
                    water = water + meal.quantity;
                }
            }
        }

        return water;
    }

    dataAboutTodayProductExtract(todayEatenFood: ConsumedFoodDto[]): mealNutritionalValInterface[] {
        let mealsEatenData: mealNutritionalValInterface[] = [];
        for (let meal of todayEatenFood) {
            let mealId = meal.nutritionalProductId;
            let eatenProduct = this.nutritionalProducts.find(product => product.id === mealId);
            if (eatenProduct.name !== 'water') {

                let mealNutritional: mealNutritionalValInterface =
                    {
                        name: eatenProduct.name,
                        calories: eatenProduct.calorificValue,
                        quantity: meal.quantity,
                        proteins: eatenProduct.proteinValue,
                        fats: eatenProduct.fatValue,
                        carbohydrates: eatenProduct.fatValue
                    };
                if (eatenProduct.nutritionalProductCategory != null) {
                    mealNutritional.categoryName = eatenProduct.nutritionalProductCategory.name;
                }

                mealsEatenData.push(mealNutritional);
            }
        }

        return mealsEatenData;
    }


}

