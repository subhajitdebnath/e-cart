import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostAuthComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    SharedModule
  ]
})
export class PostAuthModule { }
