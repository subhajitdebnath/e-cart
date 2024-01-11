import { Component } from '@angular/core';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[] = [];
  loader = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.loader = true;
    this.productService.getProducts().subscribe({
      next: (res: ProductResponse) => {
        // console.log(res);
        this.products = res.products;
      },
      error: (e) => console.error(e),
      complete: () => {
        // console.info('complete');
        this.loader = false;
      }
    });
  }

  addTocart(index: number): void {
    // console.log(this.products[index])
    this.cartService.addToCart(this.products[index]);
  }
}
