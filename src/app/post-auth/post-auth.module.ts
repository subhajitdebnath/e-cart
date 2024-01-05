import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    PostAuthComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule
  ]
})
export class PostAuthModule { }
