import {SportFacilitiesCategoryDto} from './SportFacilitiesCategoryDto';

export interface SportFacilitiesDto {
    id: number;
    isPaid: boolean;
    parallel: number;
    equator: number;
    name: string;
    sportFacilitiesCategory: SportFacilitiesCategoryDto;
}
