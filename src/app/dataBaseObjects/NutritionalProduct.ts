import {NutritionalProductCategoryDto} from './NutritionalProductCategoryDto';

export interface NutritionalProduct {
    id: number;
    name: string;
    calorificValue: string;
    nutritionalProductCategory: NutritionalProductCategoryDto;
}
