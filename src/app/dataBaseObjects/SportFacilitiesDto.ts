import {SportFacilitiesCategoryDto} from './SportFacilitiesCategoryDto';

export interface SportFacilitiesDto {
    id: number;
    paid: boolean;
    parallel: number;
    equator: number;
    name: string;
    sportFacilitiesCategory: SportFacilitiesCategoryDto;
}
