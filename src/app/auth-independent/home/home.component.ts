import { Component } from '@angular/core';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
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
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.loader = true;
    this.productService.getProducts().subscribe({
      next: (res: ProductResponse) => {
        console.log(res);
        this.products = res.products;
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('complete');
        this.loader = false;
      }
    });
  }
}
