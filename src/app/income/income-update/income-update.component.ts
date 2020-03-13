import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IncomeStoreService } from '../income-store.service';
import { Income } from '../income.interface';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeStoreService
  ) {}

  onUpdate(income: Income) {
    this.incomeService
      .updateIncome(income)
      .subscribe(() => this.router.navigate(['income/list']));
  }
}
