import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplitwiseModule} from "splitwise";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GroupsComponent} from './groups/groups.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {PaymentsComponent} from './payments/payments.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MenuComponent} from './base/components/menu/menu.component';
import {UsersComponent} from './users/users.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GroupDialogComponent} from './groups/components/group-dialog/group-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    ExpensesComponent,
    PaymentsComponent,
    MenuComponent,
    UsersComponent,
    GroupDialogComponent
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
