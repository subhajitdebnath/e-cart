import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Product } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  query = '';

  products: Product[] = [];
  loader = false;

  searchObs!: Subscription;
  private searchText = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(param => {
      // console.log(param);
      if(param['q']) {
        this.query = param['q'];
        this.searchProducts();
        console.log(this.query)
      }
    })
  }

  ngOnInit(): void {
    this.searchObs = this.searchText.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res => {
      if(this.query) {
        this.searchProducts();
      }
    })
  }

  searchProducts(): void {
    this.loader = true;
    this.productService.searchProducts(this.query).subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products;
        this.loader = false;
      }, 
      error: (err => {
        console.log(err);
      })
    })
  }

  addTocart(index: number): void {
    if(this.authService.isAuthenticated()) {
      this.cartService.addToCart(this.products[index]);
    } else {
      this.router.navigate(['user']);
    }
  }

  search(): void {
    // console.log(this.query);
    // this.searchProducts();
    this.searchText.next(this.query);
  }
}
