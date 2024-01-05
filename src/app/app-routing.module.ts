import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthIndependentComponent } from './auth-independent/auth-independent.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';
import { PostAuthComponent } from './post-auth/post-auth.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthIndependentComponent,
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule)
  },
  {
    path: 'user',
    component: PreAuthComponent,
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule),
    canActivate: [loginGuard]
  },
  {
    path: 'client',
    component: PostAuthComponent,
    loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
