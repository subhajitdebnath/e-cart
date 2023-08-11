import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthIndependentComponent } from './auth-independent/auth-independent.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthIndependentComponent,
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule)
  },
  {
    path: 'user',
    component: PreAuthComponent,
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
