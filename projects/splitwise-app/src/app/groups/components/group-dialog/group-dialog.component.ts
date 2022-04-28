import { Component, OnInit } from '@angular/core';
import { UserService } from 'splitwise';

@Component({
    selector: 'app-group-dialog',
    templateUrl: './group-dialog.component.html',
    styleUrls: ['./group-dialog.component.scss']
})
export class GroupDialogComponent implements OnInit {
    constructor(public userService: UserService) {}

    ngOnInit(): void {}
}
