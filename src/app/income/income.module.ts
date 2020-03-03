import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { IncomeDetailComponent } from './income-detail/income-detail.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeCreateComponent } from './income-create/income-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { IncomeFormComponent } from './income-form/income-form.component';
import { IncomeService } from './income.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    IncomeComponent,
    IncomeDetailComponent,
    IncomeListComponent,
    IncomeCreateComponent,
    IncomeFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    IncomeRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [IncomeService],
  bootstrap: [IncomeComponent]
})
export class IncomeModule {}
