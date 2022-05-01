import { Injectable } from '@angular/core';
import { UserInterface } from '../../types/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private index: number = 1;
    private users: UserInterface[] = [];

    constructor() {}

    createUser(user: UserInterface): void {
        user.id = this.index++;
        this.users.push(user);
    }

    getAllUsers(): UserInterface[] {
        return this.users;
    }

    getUser(userId: number): UserInterface | undefined {
        return this.users.find(user => user.id === userId);
    }

    getAllUsersByIds(userIds: number[]): UserInterface[] {
        return this.users.filter(user => userIds.some(userId => user.id === userId));
    }
}
