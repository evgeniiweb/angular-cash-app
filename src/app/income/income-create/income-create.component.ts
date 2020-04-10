import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IncomeService} from '../income-service';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent {
  constructor(
    private router: Router,
    private incomeService: IncomeService
  ) {
  }

  async onCreate(income: Income) {
    await this.incomeService.createIncome(income);
    this.router.navigate(['/income']);
  }
}
