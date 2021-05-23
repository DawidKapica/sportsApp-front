export interface TrainingDto {
    id: number;
    name: string;
    userId: number;
    exerciseId: number;
    trainingDate: Date;
    trainingValues?: number;
}
