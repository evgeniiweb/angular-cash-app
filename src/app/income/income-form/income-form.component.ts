import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Income} from '../income.interface';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss']
})
export class IncomeFormComponent implements OnChanges {
  @Input() income: Income;
  @Output() updateEvent = new EventEmitter<Income>();

  private categories = ['food', 'education', 'transport'];
  private priorities = ['low', 'medium', 'high'];

  private incomeForm = this.fb.group({
    category: ['', Validators.required],
    amount: ['', Validators.required],
    priority: ['', Validators.required],
    comment: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.income && changes.income.currentValue) {
      const {
        category,
        amount,
        priority,
        comment
      } = changes.income.currentValue;
      this.incomeForm.patchValue({category, amount, priority, comment});
    }
  }

  onSubmit() {
    if (this.incomeForm.invalid) {
      return;
    }

    const income: Income = {
      ...(this.income || {}),
      category: this.incomeForm.value.category,
      amount: this.incomeForm.value.amount,
      priority: this.incomeForm.value.priority,
      comment: this.incomeForm.value.comment,
      date: new Date()
    };
    this.updateEvent.emit(income);
  }
}
