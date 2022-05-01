import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from 'splitwise';
import { DateService } from '../../../shared/services/date.service';
import { PaymentDialogComponent } from '../../../base/dialogs/payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
    groupId: number | undefined;

    constructor(
        public dateService: DateService,
        public expenseService: ExpenseService,
        private dialog: MatDialog,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.parent?.params.subscribe(params => {
            this.groupId = +params['id'];
            console.log(params);
        });
    }

    onOpenDialogClicked(): void {
        this.dialog.open(PaymentDialogComponent, {
            data: this.groupId
        });
    }
}
