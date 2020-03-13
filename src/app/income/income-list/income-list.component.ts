import {Component} from '@angular/core';
import {IncomeStoreService} from '../income-store.service';
import {Router} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {Income} from '../income.interface';
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent {
  displayedColumns: string[] = [
    'position',
    'category',
    'amount',
    'priority',
    'date',
    'actions'
  ];

  private readonly unsubscribe$ = new Subject<Income[]>();
  income$: Observable<Income[]>;

  constructor(
    private router: Router,
    private incomeService: IncomeStoreService
  ) {
    this.income$ = of([]).pipe(
      switchMap(() => this.incomeService.getAllIncome())
    );
  }

  incomeDetails(id: number) {
    this.router.navigate(['/income', id]);
  }

  incomeEdit(id: number) {
    this.router.navigate(['/income', id, 'edit']);
  }

  incomeDelete(id: number) {
    this.incomeService.deleteIncome(id).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
    });
  }
}
