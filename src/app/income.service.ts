import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

export interface Income {
  id?: number;
  category: string;
  amount: string;
  priority: string;
  comment?: string;
  date: Date;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) {
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
}
