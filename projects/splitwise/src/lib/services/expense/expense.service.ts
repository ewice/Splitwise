import { Injectable } from '@angular/core';
import { ExpenseInterface } from '../../types/expense.interface';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    private index: number = 1;
    private expenses: ExpenseInterface[] = [];

    constructor(private userService: UserService) {}

    createExpense(expense: ExpenseInterface): void {
        expense.id = this.index++;
        expense.date = new Date();
        this.expenses.push(expense);
    }

    getAllExpensesByGroupId(groupId: number): ExpenseInterface[] {
        return this.expenses
            .filter(expense => expense.groupId === groupId)
            .map(expense => ({
                ...expense,
                paidByUser: this.userService.getUser(expense.paidByUserId)
            }));
    }
}
