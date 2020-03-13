import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Income} from './income.interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IncomeApi {
  constructor(
    private http: HttpClient
  ) {
  }

  data(): Observable<Income[]> {
    return this.http.get<Income[]>(`${environment.server}/income`);
  }

  create(income: Income): Observable<Income> {
    return this.http.post<Income>(`${environment.server}/income`, income, httpOptions);
  }

  read(id: number): Observable<Income> {
    return this.http.get<Income>(`${environment.server}/income/${id}`);
  }

  update(income: Income): Observable<Income> {
    return this.http.patch<Income>(`${environment.server}/income/${income.id}`, income);
  }

  delete(id: number): Observable<Income> {
    return this.http.delete<Income>(`${environment.server}/income/${id}`);
  }
}
