import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './login/login.interface';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {FirebaseAuthResponse} from './login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  private setToken(response: FirebaseAuthResponse | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);

      localStorage.setItem('firebase-token', response.idToken);
      localStorage.setItem('firebase-token-expires', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('invalid email');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('email not found');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('invalid password');
        break;
    }

    return throwError(error);
  }

  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expiresDate = new Date(localStorage.getItem('firebase-token-expires'));

    if (new Date() > expiresDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('firebase-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
