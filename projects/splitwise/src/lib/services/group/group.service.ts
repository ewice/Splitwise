import { Injectable } from '@angular/core';
import { GroupInterface } from '../../types/group.interface';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService {
    private index: number = 1;
    private groups: GroupInterface[] = [];

    constructor(private userService: UserService) {}

    createGroup(group: GroupInterface) {
        group.id = this.index++;
        group.users = undefined;
        this.groups.push(group);
    }

    getAllGroups(): GroupInterface[] {
        return this.groups.map(group => ({
            ...group,
            users: this.userService.getAllUsersByIds(group.userIds)
        }));
    }

    getGroupById(groupId: number): GroupInterface | undefined {
        const group = this.groups.find(group => group.id === +groupId);
        if (group) {
            group.users = this.userService.getAllUsersByIds(group.userIds);
        }
        return group;
    }
}
