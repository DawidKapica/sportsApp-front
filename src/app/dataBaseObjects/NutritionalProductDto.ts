import {NutritionalProductCategoryDto} from './NutritionalProductCategoryDto';

export interface NutritionalProductDto {
    id: number;
    name: string;
    calorificValue: number;
    nutritionalProductCategory: NutritionalProductCategoryDto;
    carbohydratesValue: number;
    proteinValue: number;
    fatValue: number;
}
