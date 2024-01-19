import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
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
  images: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
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
        this.images=this.productDetails.images
      },
      error: (e) => console.error(e)
    });
  }
  addTocart(): void {
    if(this.authService.isAuthenticated()) {
      this.cartService.addToCart(this.productDetails);
    } else {
      this.router.navigate(['user']);
    }
  }
} 

