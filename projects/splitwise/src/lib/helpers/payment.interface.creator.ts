import { PaymentInterface } from '../types/payment.interface';

export const createPaymentInterface = (id?: number): PaymentInterface => ({
    id,
    amount: 13.37,
    groupId: 1,
    paidUserId: 1,
    paidByUserId: 2
});
