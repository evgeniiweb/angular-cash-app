import {Component, } from '@angular/core';
import {IncomeService} from '../income.service';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent {

  constructor(
    private incomeService: IncomeService,
  ) {
  }

  onCreate(income: Income) {
    this.incomeService.create(income);
  }

}
