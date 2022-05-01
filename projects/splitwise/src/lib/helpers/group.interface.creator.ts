import { GroupInterface } from '../types/group.interface';
import { UserInterface } from '../types/user.interface';

export const createGroupInterface = (userIds: number[], users?: UserInterface[], id?: number): GroupInterface => ({
    id,
    name: 'Trifork',
    userIds,
    users
});
