import { UserInterface } from './user.interface';

export interface DebtInterface {
    amount: number;
    byId: number | undefined;
    by?: UserInterface;
    toId: number | undefined;
    to?: UserInterface;
}
