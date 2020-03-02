import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Income, IncomeService} from '../../income.service';

@Component({
  selector: 'app-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent implements OnInit {
  categories = ['food', 'education', 'transport']; // Todo: replace to settings service
  priorities = ['low', 'medium', 'high']; // Todo: replace to settings service
  incomeForm;
  isEditable;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incomeService: IncomeService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      category: ['', Validators.required],
      amount: ['', Validators.required],
      priority: ['', Validators.required],
      comment: ['']
    });

    this.route.paramMap.subscribe((params: Params) => {
      const id = +params.get('id');

      if (id) {
        this.getIncome(id);
        this.isEditable = true;
      } else {
        this.isEditable = false;
      }
    });
  }

  getIncome(id: number) {
    this.incomeService.read(id).subscribe((income: Income) => {
      this.editIncome(income);
    });
  }

  editIncome(income: Income) {
    this.incomeForm.patchValue({
      category: income.category,
      amount: income.amount,
      priority: income.priority,
      comment: income.comment
    });
  }

  onSubmit() {
    if (this.incomeForm.invalid) {
      return;
    }

    const income: Income = {
      category: this.incomeForm.value.category,
      amount: this.incomeForm.value.amount,
      priority: this.incomeForm.value.priority,
      comment: this.incomeForm.value.comment,
      date: new Date()
    };

    if (this.isEditable) {
      this.incomeService.update(income);
    } else {
      this.incomeService.create(income).subscribe(() => {
        this.incomeForm.reset();
        this.router.navigate(['/income/list']).then();
      });
    }
  }
}
