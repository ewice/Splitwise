import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService, ExpenseInterface } from 'splitwise';
import { format } from 'date-fns';

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
        });
    }

    formatDate(expense: ExpenseInterface): string | undefined {
        return expense.date ? format(expense.date, 'dd MMM') : undefined;
    }
}
