import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IncomeComponent} from './income.component';
import {IncomeListComponent} from './income-list/income-list.component';
import {IncomeCreateComponent} from './income-create/income-create.component';
import {IncomeUpdateComponent} from './income-update/income-update.component';
import {IncomeDetailsComponent} from './income-details/income-details.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: IncomeListComponent},
      {path: 'create', component: IncomeCreateComponent},
      {path: ':id/edit', component: IncomeUpdateComponent},
      {path: ':id', component: IncomeDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule {
}
