import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/shared/auth.guard';
import { IndexComponent } from './index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IndexRoutingModule { }