import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'splitwise';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
    groupId: number | undefined;

    constructor(public expenseService: ExpenseService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.groupId = +params['id'];
            console.log(this.expenseService.getAllExpensesByGroupId(this.groupId));
        });
    }
}
