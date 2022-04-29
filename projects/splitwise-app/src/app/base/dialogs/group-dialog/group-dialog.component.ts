import { Component } from '@angular/core';
import { GroupInterface, GroupService, UserService } from 'splitwise';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent {
    form = new FormGroup({
        name: new FormControl(undefined, Validators.required),
        userIds: new FormControl(undefined, Validators.required)
    });

    constructor(
        private dialogRef: MatDialogRef<GroupDialogComponent>,
        public userService: UserService,
        private groupService: GroupService
    ) {}

    onSaveClicked(group: GroupInterface): void {
        this.groupService.createGroup(group);
        this.dialogRef.close();
    }
}
