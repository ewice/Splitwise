import { ExpenseInterface } from '../types/expense.interface';
import { UserInterface } from '../types/user.interface';

export const createExpenseInterface = (id?: number, paidByUser?: UserInterface): ExpenseInterface => ({
    id,
    amount: 13.37,
    date: new Date(),
    groupId: 1,
    name: 'Cloak of Invisibility',
    paidByUser,
    paidByUserId: 1
});
