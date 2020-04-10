import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from './login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router
  ) {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const user: User = {
      returnSecureToken: true, // For FireBase
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.auth.login(user).subscribe(() => {
      this.loginForm.reset();
      this.router.navigate(['/dashboard']);
    });
  }
}
