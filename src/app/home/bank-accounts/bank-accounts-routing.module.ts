import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountsComponent } from './view/bank-accounts/bank-accounts.component';

const routes: Routes = [
    { path: '', component:  BankAccountsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  bankAccountsRoutingModule { }