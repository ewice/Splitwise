import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseInterface, ExpenseService, GroupInterface, GroupService, UserInterface, UserService } from 'splitwise';
import { MatDialogRef } from '@angular/material/dialog';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-expense-dialog',
    templateUrl: './expense-dialog.component.html',
    styleUrls: ['./expense-dialog.component.scss']
})
export class ExpenseDialogComponent implements OnInit {
    groups: GroupInterface[] | undefined;
    users: UserInterface[] | undefined;

    form = new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
        groupId: new FormControl(null, Validators.required),
        userId: new FormControl({ value: null, disabled: true }, Validators.required)
    });

    get name(): AbstractControl {
        return this.form.controls['name'];
    }

    get amount(): AbstractControl {
        return this.form.controls['amount'];
    }

    get groupId(): AbstractControl {
        return this.form.controls['groupId'];
    }

    get userId(): AbstractControl {
        return this.form.controls['userId'];
    }

    constructor(
        public groupService: GroupService,
        public userService: UserService,
        private dialogRef: MatDialogRef<ExpenseDialogComponent>,
        private expenseService: ExpenseService
    ) {}

    ngOnInit(): void {
        this.groupService
            .getAllGroups()
            .pipe(
                switchMap((groups: GroupInterface[]) => {
                    this.groups = groups;
                    return this.groupId.valueChanges;
                })
            )
            .subscribe((groupId: number) => {
                this.users = this.groups?.find(group => group.id === +groupId)?.users;
                this.userId.enable();
            });
    }

    onSaveClicked(expense: ExpenseInterface): void {
        this.expenseService.createExpense(expense);
        this.dialogRef.close();
    }
}
