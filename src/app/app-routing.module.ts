import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IncomeListComponent} from './income/income-list/income-list.component';
import {IncomeCreateComponent} from './income/income-create/income-create.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'income/list', component: IncomeListComponent},
  {path: 'income/create', component: IncomeCreateComponent},
  {path: 'income/:id/edit', component: IncomeCreateComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
