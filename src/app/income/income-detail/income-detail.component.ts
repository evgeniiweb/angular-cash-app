import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IncomeService } from '../income.service';
import { Income } from '../income.interface';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss']
})
export class IncomeDetailComponent {
  income$ = this.route.paramMap.pipe(
    map((params: Params) => params.get('id')),
    switchMap(id => this.incomeService.read(id))
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService
  ) {}

  onUpdate(income: Income) {
    this.incomeService
      .update(income)
      .subscribe(() => this.router.navigate(['income/list']));
  }
}
