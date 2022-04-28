import { Component, OnInit } from '@angular/core';
import { GroupInterface, GroupService, UserService } from 'splitwise';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GroupDialogComponent } from './components/group-dialog/group-dialog.component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('')
    });
    groups: GroupInterface[] | undefined;

    constructor(public groupService: GroupService, private userService: UserService, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.addUsers();
        this.addGroup();
        this.addGroup();
        this.addGroup();
    }

    addGroup(): void {
        this.groupService.createGroup({
            name: 'Test',
            userIds: [1, 2]
        });
    }

    addUsers(): void {
        this.userService.createUser({
            name: 'Henning'
        });
        this.userService.createUser({
            name: 'Nils'
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(GroupDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
