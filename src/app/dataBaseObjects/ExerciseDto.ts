import {ExerciseCategoryDto} from './ExerciseCategoryDto';

export interface ExerciseDto {
    id: number;
    name: string;
    caloriesBurnedInMinute: number;
    exerciseDescription: string;
    exerciseCategory: ExerciseCategoryDto;
    parameterId?: number;
}
