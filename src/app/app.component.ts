import {Component} from '@angular/core';

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
  title = 'Check your cash';

  links: NavigationLink[] = [
    {route: '/dashboard', icon: 'dashboard', title: 'Dashboard'},
    {route: '/income/list', icon: 'attach_money', title: 'Income'},
    // {route: '/expense/list', icon: 'money_off', title: 'Expense'}, Todo: add expense component
    {route: '/about', icon: 'info', title: 'About'}
  ];

  constructor() {
  }
}
