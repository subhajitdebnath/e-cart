import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/products.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Product[] = [];
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }

}
