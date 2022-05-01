import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'splitwise';
import { ActivatedRoute } from '@angular/router';
import { PaymentDialogComponent } from '../../../base/dialogs/payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
    groupId: number | undefined;

    constructor(public balanceService: BalanceService, private dialog: MatDialog, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.parent?.params.subscribe(params => {
            this.groupId = +params['id'];
        });
    }

    onOpenDialogClicked(): void {
        this.dialog.open(PaymentDialogComponent, {
            data: this.groupId
        });
    }
}
