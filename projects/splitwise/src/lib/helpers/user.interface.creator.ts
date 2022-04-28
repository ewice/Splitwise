import { UserInterface } from '../types/user.interface';

export const createUserInterface = (id?: number): UserInterface => ({
    id,
    name: 'Henning'
});
