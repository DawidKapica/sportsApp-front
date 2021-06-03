import {PersonDto} from './PersonDto';

export interface UserDto extends PersonDto{
    // id?: number;
    loginId: number;
    dailyCalRequirement: number;
    dailyCarbRequirement: number;
    dailyFatRequirement: number;
    dailyProtRequirement: number;
    height: number;
    email: string;
}
