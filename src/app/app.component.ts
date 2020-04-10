import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

interface NavigationLink {
  route: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer', {static: true}) drawer: MatDrawer;

  title = 'Check your cash';

  links: NavigationLink[] = [
    {route: '/dashboard', icon: 'dashboard', title: 'Dashboard'},
    {route: '/income', icon: 'attach_money', title: 'Income'},
    {route: '/about', icon: 'info', title: 'About'}
  ];

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
  }

  logout() {
    this.drawer.close();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
