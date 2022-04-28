import { Injectable } from '@angular/core';
import { GroupInterface } from '../../types/group.interface';
import { UserService } from '../user/user.service';
import { Observable, of } from 'rxjs';

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

    getAllGroups(): Observable<GroupInterface[]> {
        return of(
            this.groups.map(group => ({
                ...group,
                users: this.userService.getAllUsersByIds(group.userIds)
            }))
        );
    }
}
