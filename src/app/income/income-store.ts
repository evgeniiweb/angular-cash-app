import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {share, switchMap} from 'rxjs/operators';
import {IncomeApi} from './income-api';
import {Income} from './income.interface';

@Injectable({
  providedIn: 'root'
})
export class IncomeStore {
  private readonly refresh$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private incomeApiService: IncomeApi
  ) {
  }

  getAllIncome(): Observable<Income[]> {
    return this.refresh$.pipe(
      switchMap(() => this.incomeApiService.data()),
      share()
    );
  }

  async createIncome(income: Income): Promise<void> {
    await this.incomeApiService.create(income).toPromise();
    this.refresh$.next(true);
  }

  getIncome(id: number): Observable<Income> {
    return this.incomeApiService.read(id);
  }

  async updateIncome(income: Income): Promise<void> {
    await this.incomeApiService.update(income).toPromise();
    this.refresh$.next(true);
  }

  async deleteIncome(id: number): Promise<void> {
    await this.incomeApiService.delete(id).toPromise();
    this.refresh$.next(true);
  }
}
