import { Injectable } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
import { GroupService } from '../group/group.service';
import { PaymentService } from '../payment/payment.service';
import { UserService } from '../user/user.service';
import { UserInterface } from '../../types/user.interface';
import { VerticeInterface } from '../../types/vertice.interface';
import { BalanceInterface } from '../../types/balance.interface';
import { DebtInterface } from '../../types/debt.interface';
import { ExpenseInterface } from '../../types/expense.interface';
import { PaymentInterface } from '../../types/payment.interface';

@Injectable({
    providedIn: 'root'
})
export class BalanceService {
    private balances: BalanceInterface[] = [];
    private debts: DebtInterface[] = [];
    private expenses: ExpenseInterface[] = [];
    private payments: PaymentInterface[] = [];
    private vertices: VerticeInterface[] = [];
    private users: UserInterface[] | undefined;

    constructor(
        private expenseService: ExpenseService,
        private groupService: GroupService,
        private paymentService: PaymentService,
        private userService: UserService
    ) {}

    getAllBalances(groupId: number): BalanceInterface[] {
        this.resetArrays();
        this.expenses = this.expenseService.getAllExpensesByGroupId(groupId);
        this.payments = this.paymentService.getAllPaymentsByGroupId(groupId);
        this.users = this.groupService.getGroupById(groupId)?.users;

        if (this.users && this.users.length > 0) {
            this.setInitialVertices();
            this.createVertices();
            this.getDepts();
            this.createBalances();
        }

        return this.balances;
    }

    private addVertice(by: number, to: number, amount: number): void {
        const verticeIndex = this.vertices.findIndex(vertice => vertice.by === by && vertice.to === to);
        verticeIndex !== -1 ? (this.vertices[verticeIndex].amount += amount) : this.vertices.push({ to, by, amount });
    }

    private createVertices(): void {
        this.users.forEach(user => {
            this.expenses.forEach(expense => {
                if (user.id && expense.paidByUserId !== user.id) {
                    const amount = (1 / this.users.length) * expense.amount;
                    this.addVertice(expense.paidByUserId, user.id, amount);
                }
            });
        });

        this.payments.forEach(payments => {
            this.addVertice(payments.paidByUserId, payments.paidUserId, payments.amount);
        });
    }

    private findVertice(by: number | undefined, to: number | undefined): VerticeInterface | undefined {
        return this.vertices.find(vertice => vertice.by === by && vertice.to === to);
    }

    private createBalances(): void {
        this.users?.forEach(user => {
            if (user.id) {
                const userInterface = this.userService.getUser(user.id);
                const userDebts = this.debts.filter(debt => debt.byId === user.id);
                if (userInterface && userDebts.length > 0) {
                    this.balances.push({
                        user: userInterface,
                        debts: userDebts.map(debt => ({
                            ...debt,
                            by: debt.byId ? this.userService.getUser(debt.byId) : undefined,
                            to: debt.toId ? this.userService.getUser(debt.toId) : undefined
                        }))
                    });
                }
            }
        });
    }

    private getDepts(): void {
        const userIds = this.users?.filter(user => !!user.id).map(user => user.id);
        if (userIds) {
            for (let i = 0; i < userIds.length - 1; i++) {
                for (let j = userIds.length; j > i; j--) {
                    const ijVertice = this.findVertice(userIds[i], userIds[j]);
                    const jiVertice = this.findVertice(userIds[j], userIds[i]);
                    if (ijVertice && jiVertice) {
                        if (ijVertice?.amount > jiVertice?.amount) {
                            this.debts.push({
                                amount: ijVertice?.amount - jiVertice?.amount,
                                byId: userIds[j],
                                toId: userIds[i]
                            });
                        }
                        if (ijVertice?.amount < jiVertice?.amount) {
                            this.debts.push({
                                amount: jiVertice?.amount - ijVertice?.amount,
                                byId: userIds[i],
                                toId: userIds[j]
                            });
                        }
                    }
                }
            }
        }
    }

    private setInitialVertices() {
        this.users?.forEach(a => {
            this.users?.forEach(b => {
                if (a.id && b.id) {
                    this.addVertice(a.id, b.id, 0);
                    this.addVertice(b.id, a.id, 0);
                }
            });
        });
    }

    private resetArrays(): void {
        this.balances = [];
        this.debts = [];
        this.expenses = [];
        this.payments = [];
        this.vertices = [];
    }
}
