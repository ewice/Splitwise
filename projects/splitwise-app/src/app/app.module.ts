import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplitwiseModule} from "splitwise";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GroupsComponent} from './groups/groups.component';
import {ExpensesComponent} from './groups/components/expenses/expenses.component';
import {PaymentsComponent} from './groups/components/payments/payments.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MenuComponent} from './base/menus/menu/menu.component';
import {UsersComponent} from './users/users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GroupDialogComponent} from './base/dialogs/group-dialog/group-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { SubMenuComponent } from './base/menus/sub-menu/sub-menu.component';
import { ExpenseDialogComponent } from './base/dialogs/expense-dialog/expense-dialog.component';
import { UserDialogComponent } from './base/dialogs/user-dialog/user-dialog.component';
import { BalanceComponent } from './groups/components/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    ExpensesComponent,
    PaymentsComponent,
    MenuComponent,
    UsersComponent,
    GroupDialogComponent,
    SubMenuComponent,
    ExpenseDialogComponent,
    UserDialogComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitwiseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
