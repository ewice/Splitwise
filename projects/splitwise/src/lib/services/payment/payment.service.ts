import { Injectable } from '@angular/core';
import { PaymentInterface } from '../../types/payment.interface';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private index: number = 1;
    private payments: PaymentInterface[] = [];

    constructor(private userService: UserService) {}

    createPayment(payment: PaymentInterface): void {
        payment.id = this.index++;
        this.payments.push(payment);
    }

    getAllPaymentsByGroupId(groupId: number): PaymentInterface[] {
        return this.payments.filter(payment => payment.groupId === groupId);
    }

    getAllPaymentsByUserId(userId: number): PaymentInterface[] {
        return this.payments
            .filter(payment => payment.paidByUserId === userId)
            .map(payment => ({
                ...payment,
                paidUser: this.userService.getUser(payment.paidUserId),
                paidByUser: this.userService.getUser(payment.paidByUserId)
            }));
    }
}
