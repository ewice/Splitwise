import { UserInterface } from './user.interface';
import { DebtInterface } from './debtInterface';

export interface BalanceInterface {
    user: UserInterface | undefined;
    debts: DebtInterface[];
}
