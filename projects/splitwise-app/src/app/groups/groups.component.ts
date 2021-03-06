import { Component } from '@angular/core';
import { GroupService } from 'splitwise';
import { MatDialog } from '@angular/material/dialog';
import { GroupDialogComponent } from '../base/dialogs/group-dialog/group-dialog.component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
    constructor(public groupService: GroupService, private dialog: MatDialog) {}

    onOpenDialogClicked(): void {
        this.dialog.open(GroupDialogComponent);
    }
}
