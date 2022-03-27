import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
