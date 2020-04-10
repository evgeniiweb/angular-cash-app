import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IncomeService} from '../income-service';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent {
  income$: Observable<Income[]>;
  displayedColumns: string[] = [
    'position',
    'category',
    'amount',
    'date',
    'actions'
  ];

  constructor(
    private router: Router,
    private incomeService: IncomeService
  ) {
    this.income$ = incomeService.getAllIncome();
  }

  incomeDetails(id: number) {
    this.router.navigate(['/income', id]);
  }

  incomeEdit(id: number) {
    this.router.navigate(['/income', id, 'edit']);
  }

  async incomeDelete(id: number) {
    await this.incomeService.deleteIncome(id);
  }
}
