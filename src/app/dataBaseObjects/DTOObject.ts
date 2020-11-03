import {DTOPageable} from './DTOPageable';
import {DTOSort} from './DTOSort';

export interface DTOObject<DTOType> {
    content: DTOType;
    empty: boolean;
    first: boolean;
    number: number;
    numberOfElements: number;
    pageable: DTOPageable;
    size: number;
    sort: DTOSort;
    totalElements: number;
    totalPages: number;
}
