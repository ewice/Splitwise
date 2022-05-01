import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupsComponent } from "./groups/groups.component";
import { ExpensesComponent } from "./groups/components/expenses/expenses.component";
import { PaymentsComponent } from "./groups/components/payments/payments.component";
import { UsersComponent } from "./users/users.component";
import { BalanceComponent } from "./groups/components/balance/balance.component";
import {GroupOverviewComponent} from "./groups/components/group-overview/group-overview.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "groups",
    component: GroupsComponent
  },
  {
    path: "groups/:id",
    component: GroupOverviewComponent,
    children: [
      {
        path: "expenses",
        component: ExpensesComponent
      },
      {
        path: "balances",
        component: BalanceComponent
      },
      {
        path: "payments",
        component: PaymentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
