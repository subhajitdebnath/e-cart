import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    private domSanitizer: DomSanitizer,
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
        this.products.forEach(prod => {
          return prod['header'] = this.domSanitizer.bypassSecurityTrustHtml("<h1>" + prod.title + "</h1><script>alert('hi')</script>");
        });
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
