import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
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
    private authService: AuthService,
    private router: Router,
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
    if(this.authService.isAuthenticated()) {
      this.cartService.addToCart(this.products[index]);
    } else {
      this.router.navigate(['user']);
    }
  }
}
