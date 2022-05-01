import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'splitwise';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../../../base/dialogs/payment-dialog/payment-dialog.component';
import { DateService } from '../../../shared/services/date.service';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
    groupId: number | undefined;

    constructor(
        public dateService: DateService,
        public paymentService: PaymentService,
        private dialog: MatDialog,
        private route: ActivatedRoute
    ) {}

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
