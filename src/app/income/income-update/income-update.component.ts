import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, pluck, switchMap} from 'rxjs/operators';
import {IncomeService} from '../income-service';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-update.component.html',
  styleUrls: ['./income-update.component.scss']
})
export class IncomeUpdateComponent {
  income$ = this.route.paramMap.pipe(
    map((params: Params) => params.get('id')),
    switchMap(id => this.incomeService.getIncome(id))
  );

  incomeDate$ = this.income$.pipe(
    pluck<Income, Date>('date')
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService
  ) {
  }

  async onUpdate(income: Income) {
    await this.incomeService.updateIncome(income);
    this.router.navigate(['income/list']);
  }
}
