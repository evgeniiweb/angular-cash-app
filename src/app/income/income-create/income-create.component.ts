import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IncomeStore} from '../income-store';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent {
  constructor(
    private router: Router,
    private store: IncomeStore
  ) {
  }

  async onCreate(income: Income) {
    await this.store.createIncome(income);
    this.router.navigate(['/income']);
  }
}
