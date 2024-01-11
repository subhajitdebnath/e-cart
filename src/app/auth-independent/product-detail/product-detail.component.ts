import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponse } from 'src/app/core/models/products.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  // id: any;
  // title: any;
  // description: any;
  // products: Product[] = [];
  productId!: number ;
  productDetails: any;
  // @Input() productDetails!: boolean;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.title = this.route.snapshot.paramMap.get('title');
    // this.description = this.route.snapshot.paramMap.get('description');

    // console.log(this.id, this.title,this.description)
  }

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
      console.log(res);
      this.productDetails = res;
      console.log(this.productDetails);
    },
    error: (e) => console.error(e)
  });
}
  // getProductDetails(): void {
    //   this.productService.getProductById(this.productId).subscribe({
    //     next: (product: Product) => {
    //       this.product = product;
    //     },
    //     error: (e) => console.error(e)
    //   });
    // }



} 

