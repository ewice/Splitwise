import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupsComponent } from "./groups/groups.component";
import { ExpensesComponent } from "./groups/components/expenses/expenses.component";
import { PaymentsComponent } from "./groups/components/payments/payments.component";
import { UsersComponent } from "./users/users.component";
import { BalanceComponent } from "./groups/components/balance/balance.component";

const routes: Routes = [
  {
    path: "groups",
    component: GroupsComponent
  },
  {
    path: "groups/:id/expenses",
    component: ExpensesComponent
  },
  {
    path: "groups/:id/balances",
    component: BalanceComponent
  },
  {
    path: "payments",
    component: PaymentsComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
