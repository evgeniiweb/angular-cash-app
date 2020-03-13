import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { IncomeUpdateComponent } from './income-update/income-update.component';
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
import { IncomeStoreService } from './income-store.service';
import { HttpClientModule } from '@angular/common/http';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import {IncomeApiService} from './income-api.service';

@NgModule({
  declarations: [
    IncomeComponent,
    IncomeUpdateComponent,
    IncomeListComponent,
    IncomeCreateComponent,
    IncomeFormComponent,
    IncomeDetailsComponent
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
  providers: [
    IncomeApiService,
    IncomeStoreService
  ],
  bootstrap: [IncomeComponent]
})
export class IncomeModule {}
