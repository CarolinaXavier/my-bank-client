import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/shared/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'bank-accounts' },
            {
                path: 'bank-accounts', loadChildren: () => import('./bank-accounts/bank-accounts.module').then(m => m.BankAccountsModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
                canActivate: [AuthGuard]
            },
            { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }