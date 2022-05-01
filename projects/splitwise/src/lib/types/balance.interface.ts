import { UserInterface } from './user.interface';
import { DebtInterface } from './debt.interface';

export interface BalanceInterface {
    user: UserInterface | undefined;
    debts: DebtInterface[];
}
