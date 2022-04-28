import { UserInterface } from './user.interface';

export interface PaymentInterface {
    id?: number;
    amount: number;
    groupId: number;
    paidUser?: UserInterface;
    paidUserId: number;
    paidByUser?: UserInterface;
    paidByUserId: number;
}
