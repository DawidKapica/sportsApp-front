export interface MessageDto {
    id?: number;
    userId: number;
    expertId: number;
    time: number;
    isUserSender: boolean;
    content: string;
}
