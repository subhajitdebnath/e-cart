import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];
  cartSub = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSub.next(this.cart);
  }

  getCart() {
    return [...this.cart];
  }
}
