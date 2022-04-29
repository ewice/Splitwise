import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserInterface, UserService } from 'splitwise';

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
    form = new FormGroup({
        name: new FormControl(undefined, Validators.required)
    });

    get name(): AbstractControl {
        return this.form.controls['name'];
    }

    constructor(private dialogRef: MatDialogRef<UserDialogComponent>, private userService: UserService) {}

    onSaveClicked(user: UserInterface): void {
        this.userService.createUser(user);
        this.dialogRef.close();
    }
}
