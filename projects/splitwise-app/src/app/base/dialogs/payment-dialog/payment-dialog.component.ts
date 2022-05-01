import { Component, Inject } from '@angular/core';
import { GroupInterface, GroupService, PaymentInterface, PaymentService } from 'splitwise';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-payment-dialog',
    templateUrl: './payment-dialog.component.html',
    styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent {
    group: GroupInterface | undefined;

    form = new FormGroup({
        amount: new FormControl(null, Validators.required),
        paidUserId: new FormControl(null, Validators.required),
        paidByUserId: new FormControl(null, Validators.required)
    });

    get amount(): AbstractControl {
        return this.form.controls['amount'];
    }

    get paidUserId(): AbstractControl {
        return this.form.controls['paidUserId'];
    }

    get paidByUserId(): AbstractControl {
        return this.form.controls['paidByUserId'];
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: number,
        private dialogRef: MatDialogRef<PaymentDialogComponent>,
        private groupService: GroupService,
        private paymentService: PaymentService
    ) {
        this.group = this.groupService.getGroupById(data);
    }

    onSaveClicked(values: PaymentInterface): void {
        const payment: PaymentInterface = {
            amount: values.amount,
            groupId: this.data,
            paidUserId: +values.paidUserId,
            paidByUserId: +values.paidByUserId
        };
        this.paymentService.createPayment(payment);
        this.dialogRef.close();
    }
}
