import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {IncomeService} from '../income-service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent {
  income$ = this.route.paramMap.pipe(
    map((params: Params) => params.get('id')),
    switchMap(id => this.incomeService.getIncome(id))
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService
  ) {
  }
}
