import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IncomeListComponent} from './income/income-list/income-list.component';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {IncomeCreateComponent} from './income/income-create/income-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IncomeListComponent,
    AboutComponent,
    IncomeCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
