import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountsComponent } from './view/bank-accounts/bank-accounts.component';
import { BamkAccountsService } from './services/bank-account.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BankAccountsComponent
  ],
  imports: [
    CommonModule,
    bankAccountsRoutingModule,
    FormsModule
  ],
  providers: [
    BamkAccountsService
  ]
})
export class BankAccountsModule { }
