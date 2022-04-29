import { Component } from '@angular/core';
import { UserService } from 'splitwise';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../base/dialogs/user-dialog/user-dialog.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    constructor(public userService: UserService, private dialog: MatDialog) {}

    onOpenDialogClicked(): void {
        this.dialog.open(UserDialogComponent);
    }
}
