import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
