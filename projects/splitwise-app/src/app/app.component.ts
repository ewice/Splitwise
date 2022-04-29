import { Component, OnInit } from '@angular/core';
import { GroupService, UserService } from 'splitwise';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    index = 1;
    title = 'splitwise-app';

    constructor(public groupService: GroupService, private dialog: MatDialog, private userService: UserService) {}

    ngOnInit(): void {
        this.addUsers();
        this.addGroup();
        this.addGroup();
        this.addGroup();
    }

    addUsers(): void {
        this.userService.createUser({
            name: 'Henning'
        });
        this.userService.createUser({
            name: 'Nils'
        });
    }

    addGroup(): void {
        this.groupService.createGroup({
            name: 'Test' + this.index++,
            userIds: [1, 2]
        });
    }
}
