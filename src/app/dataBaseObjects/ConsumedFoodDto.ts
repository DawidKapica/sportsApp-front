import DateTimeFormat = Intl.DateTimeFormat;
import {Time} from '@angular/common';

export interface ConsumedFoodDto {
    id?: number;
    quantity: number;
    userId: number;
    nutritionalProductId: number;
    consumedFoodDate: Date;
    consumedFoodTime: Time;
}
