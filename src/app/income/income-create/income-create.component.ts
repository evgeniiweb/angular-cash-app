import { Component } from '@angular/core';
import { IncomeStoreService } from '../income-store.service';
import { Income } from '../income.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent {
  constructor(private router: Router, private incomeService: IncomeStoreService) {}

  onCreate(income: Income) {
    this.incomeService
      .createIncome(income)
      .subscribe(() => this.router.navigate(['/income']));
  }
}
