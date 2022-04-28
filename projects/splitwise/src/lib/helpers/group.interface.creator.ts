import { GroupInterface } from '../types/group.interface';
import { UserInterface } from '../types/user.interface';

export const createGroupInterface = (users: UserInterface[], id?: number): GroupInterface => ({
    id,
    users
});
