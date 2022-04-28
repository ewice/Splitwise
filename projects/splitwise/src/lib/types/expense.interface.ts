import { UserInterface } from './user.interface';

export interface ExpenseInterface {
    id?: number;
    amount: number;
    date: Date;
    groupId: number;
    name: string;
    paidByUser?: UserInterface;
    paidByUserId: number;
}
