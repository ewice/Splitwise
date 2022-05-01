import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService, UserService, ExpenseService, GroupInterface, UserInterface, ExpenseInterface } from 'splitwise';

@Component({
    selector: 'app-expense-dialog',
    templateUrl: './expense-dialog.component.html',
    styleUrls: ['./expense-dialog.component.scss']
})
export class ExpenseDialogComponent implements OnInit {
    groups: GroupInterface[];
    users: UserInterface[] | undefined;

    form = new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
        groupId: new FormControl(null, Validators.required),
        paidByUserId: new FormControl({ value: null, disabled: true }, Validators.required)
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

    get paidByUserId(): AbstractControl {
        return this.form.controls['paidByUserId'];
    }

    constructor(
        public groupService: GroupService,
        public userService: UserService,
        private dialogRef: MatDialogRef<ExpenseDialogComponent>,
        private expenseService: ExpenseService
    ) {
        this.groups = this.groupService.getAllGroups();
    }

    ngOnInit(): void {
        this.groupId.valueChanges.subscribe((groupId: number) => {
            this.users = this.groups?.find(group => group.id === +groupId)?.users;
            this.paidByUserId.enable();
        });
    }

    onSaveClicked(values: ExpenseInterface): void {
        const expense: ExpenseInterface = {
            amount: values.amount,
            name: values.name,
            groupId: +values.groupId,
            paidByUserId: +values.paidByUserId
        };
        this.expenseService.createExpense(expense);
        this.dialogRef.close();
    }
}
