import { Injectable } from '@angular/core';
import { Product, cartChangeType } from '../models/products.model';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];
  cartSub = new BehaviorSubject(this.cart);

  constructor(
    private lsService: LocalstorageService
  ) {
    const cartData = this.getCartFromLS();
    if(cartData) {
      this.cart = cartData;
      this.cartSub.next(this.cart);
    }
  }

  addToCart(product: Product) {

    /** check if the product already exists in the cart */
    const prod = this.cart.find((item: Product) => item.id === product.id);
    if(prod) {
      if(prod.quantity) {
        prod.quantity += 1; // increase quantity of the already added product by 1 always
      }
    } else {
      product['quantity'] = 1; // set quantity of the newly added product as 1 always
      this.cart.push(product);
    }
    this.saveCart();
  }

  deleteItemFromCart(productId: number): void {
    this.cart = this.cart.filter((item: Product) => item.id !== productId);
    this.saveCart();
  }

  changeQuantity(productId: number, type: cartChangeType): void {
    const prod = this.cart.find((item: Product) => item.id === productId);
    if(type === cartChangeType.DECREMENT) {
      if(prod && prod.quantity > 1) {
        prod.quantity -= 1;
      } else {
        this.deleteItemFromCart(productId);
        return;
      }
    } else {
      if(prod?.quantity) {
        prod.quantity += 1;
      }
    }
    this.saveCart();
  }

  getCart() {
    return [...this.cart];
  }

  getCartFromLS(): Product[] | null {
    return this.lsService.getData('cartData');
  }

  saveCart(): void {
    this.lsService.setData('cartData', this.cart);
    this.cartSub.next(this.cart);
  }
}
