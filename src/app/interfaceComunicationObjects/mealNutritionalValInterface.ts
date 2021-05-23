import {Time} from '@angular/common';

export interface mealNutritionalValInterface {
    name?: string
    categoryName?: string;
    quantity?: number;
    calories?: number;
    proteins?: number;
    fats?: number;
    carbohydrates?: number;
    consumedFoodDate?: Date;
    consumedFoodTime?: Time;
}
