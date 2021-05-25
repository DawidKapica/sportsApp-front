import {PersonDto} from './PersonDto';

export interface ExpertDto extends PersonDto{
    id: number;
    education: string;
    description: string;
    phone: number;
    mail: string;
    loginId: number
}
