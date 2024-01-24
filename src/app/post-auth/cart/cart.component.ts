import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, cartChangeType } from 'src/app/core/models/products.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Product[] = [];
  loader = false;
  constructor(
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.loader = true;
    // setTimeout(() => {
    //   this.loader = false;
    //   this.cart = this.cartService.getCart();
    //   console.log(this.cart);
    // }, 0);

    this.cartService.cartSub.subscribe(res => {
      this.cart = res;
    });
  }

  decreaseQuantity(index: number): void {
    this.cartService.changeQuantity(this.cart[index].id, cartChangeType.DECREMENT);
  }

  increaseQuantity(index: number): void {
    this.cartService.changeQuantity(this.cart[index].id, cartChangeType.INCREMENT);
  }

  deleteItem(index: number): void {
    this.cartService.deleteItemFromCart(this.cart[index].id);
  }

  goToAddressSelection(): void {
    this.router.navigateByUrl('client/address-select');
  }

}
