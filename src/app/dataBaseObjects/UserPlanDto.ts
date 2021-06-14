export interface UserPlanDto {
    id?: number;
    userId: number;
    description: string;
    goal?: number;
    startDate: Date;
    endDate: Date;
    goalStatus?: number;
    title?: string;
}
