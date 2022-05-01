import { Component, OnInit } from '@angular/core';
import { ExpenseService, GroupService, PaymentService, UserService } from 'splitwise';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    index = 1;
    title = 'splitwise-app';

    constructor(
        public groupService: GroupService,
        private dialog: MatDialog,
        private userService: UserService,
        private expenseService: ExpenseService,
        private paymentService: PaymentService
    ) {}

    ngOnInit(): void {
        this.addUsers();
        this.addGroup();
        this.addGroup();
        this.addGroup();
        this.addExpenses();
        // this.addPayment();
    }

    addUsers(): void {
        this.userService.createUser({
            name: 'Henning'
        });
        this.userService.createUser({
            name: 'Nils'
        });
        this.userService.createUser({
            name: 'Peter'
        });
    }

    addGroup(): void {
        this.groupService.createGroup({
            name: 'Test' + this.index++,
            userIds: [1, 2, 3]
        });
    }

    addExpenses(): void {
        this.expenseService.createExpense({
            amount: 12,
            name: 'Expense1',
            groupId: 1,
            paidByUserId: 1
        });
        this.expenseService.createExpense({
            amount: 18,
            name: 'Expense2',
            groupId: 1,
            paidByUserId: 2
        });
    }

    addPayment(): void {
        this.paymentService.createPayment({
            amount: 6,
            groupId: 1,
            paidUserId: 1,
            paidByUserId: 2
        });
    }
}
