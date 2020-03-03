import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../income.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Income } from '../income.interface';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'category',
    'amount',
    'priority',
    'date',
    'actions'
  ];
  income$: Observable<Income[]>;

  constructor(private router: Router, private incomeService: IncomeService) {
    this.income$ = this.incomeService.data();
  }

  ngOnInit() {}

  incomeEdit(id: number) {
    this.router.navigate(['/income', id, 'edit']);
  }
}
