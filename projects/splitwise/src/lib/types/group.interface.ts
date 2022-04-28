import { UserInterface } from './user.interface';

export interface GroupInterface {
    id?: number;
    name: string;
    userIds: number[];
    users?: UserInterface[];
}
