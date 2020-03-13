import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Income} from './income.interface';
import {IncomeApiService} from './income-api.service';
import {switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeStoreService {
  private readonly refresh$ = new BehaviorSubject<boolean>(true);

  constructor(
    private http: HttpClient,
    private incomeApiService: IncomeApiService
  ) {}

  getAllIncome(): Observable<Income[]> {
    return this.refresh$.pipe(
      switchMap(() => this.incomeApiService.data())
    );
  }

  createIncome(income: Income): Observable<Income> {
    return this.incomeApiService.create(income).pipe(
      tap(() => this.refresh$.next(true))
    );
  }

  getIncome(id: number): Observable<Income> {
    return this.incomeApiService.read(id).pipe(
      tap(() => this.refresh$.next(true))
    );
  }

  updateIncome(income: Income): Observable<Income> {
    return this.incomeApiService.update(income).pipe(
      tap(() => this.refresh$.next(true))
    );
  }

  deleteIncome(id: number): Observable<Income> {
    return this.incomeApiService.delete(id).pipe(
      tap(() => this.refresh$.next(true))
    );
  }
}
