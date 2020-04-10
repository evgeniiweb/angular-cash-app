import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import {IncomeRoutingModule} from './income-routing.module';
import {IncomeComponent} from './income.component';
import {IncomeListComponent} from './income-list/income-list.component';
import {IncomeCreateComponent} from './income-create/income-create.component';
import {IncomeDetailsComponent} from './income-details/income-details.component';
import {IncomeUpdateComponent} from './income-update/income-update.component';
import {IncomeFormComponent} from './income-form/income-form.component';
import {IncomeService} from './income-service';
import {IncomeApi} from './income-api';

import {AuthInterceptor} from '../auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

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
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    IncomeApi,
    IncomeService,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [IncomeComponent]
})
export class IncomeModule {
}
