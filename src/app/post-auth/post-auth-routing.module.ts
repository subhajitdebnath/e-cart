import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressSelectionComponent } from './address-selection/address-selection.component';

const routes: Routes = [
  {
   path: 'cart',
   component: CartComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'address-select',
    component: AddressSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
