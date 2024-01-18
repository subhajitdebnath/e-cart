import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId!: number ;
  productDetails: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
      this.getProductDetails();
    });
}
getProductDetails(): void { 
  this.productService.getProductById(this.productId).subscribe({
    next: (res) => {
      this.productDetails = res;
      console.log(this.productDetails);
    },
    error: (e) => console.error(e)
  });
}
addTocart(): void {
  this.cartService.addToCart(this.productDetails);
}
} 

