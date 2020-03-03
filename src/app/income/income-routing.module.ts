import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeCreateComponent } from './income-create/income-create.component';
import {IncomeComponent} from './income.component';
import {IncomeDetailComponent} from './income-detail/income-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: IncomeListComponent },
      {path: 'create', component: IncomeCreateComponent},
      {path: ':id', component: IncomeDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule {}
