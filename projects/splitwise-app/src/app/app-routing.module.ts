import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsComponent} from "./groups/groups.component";
import {ExpensesComponent} from "./expenses/expenses.component";
import {PaymentsComponent} from "./payments/payments.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: 'groups', component: GroupsComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
