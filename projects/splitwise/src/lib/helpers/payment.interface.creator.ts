import { PaymentInterface } from '../types/payment.interface';
import { UserInterface } from '../types/user.interface';

export const createPaymentInterface = (date: Date, id?: number, user?: UserInterface): PaymentInterface => ({
    id,
    date,
    amount: 13.37,
    groupId: 1,
    paidUserId: 1,
    paidUser: user,
    paidByUserId: 1,
    paidByUser: user
});
