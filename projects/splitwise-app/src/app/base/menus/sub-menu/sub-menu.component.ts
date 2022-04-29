import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseDialogComponent } from '../../dialogs/expense-dialog/expense-dialog.component';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {
    constructor(private dialog: MatDialog) {}

    onOpenDialogClicked(): void {
        this.dialog.open(ExpenseDialogComponent);
    }
}
