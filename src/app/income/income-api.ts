import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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
    return this.http.get<Income[]>(`${environment.firebaseUrl}/income.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key
            }));
        }));
  }

  create(income: Income): Observable<Income> {
    return this.http.post<Income>(`${environment.firebaseUrl}/income.json`, income, httpOptions)
      .pipe(
        map((response) => {
          return {
            ...income,
            id: response.name
          };
        }));
  }

  read(id: number): Observable<Income> {
    return this.http.get<Income>(`${environment.firebaseUrl}/income/${id}.json`)
      .pipe(
        map((income: Income) => {
          return {
            ...income,
            id
          };
        })
      );
  }

  update(income: Income): Observable<Income> {
    return this.http.patch<Income>(`${environment.firebaseUrl}/income/${income.id}.json`, income);
  }

  delete(id: number): Observable<Income> {
    return this.http.delete<Income>(`${environment.firebaseUrl}/income/${id}.json`);
  }
}
