import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { LoginService } from 'src/app/pre-auth/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userData: any;
  cartInfo: Product[] = [];
  itemQuantity = 0;

  query = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.getAuthSub();
    this.getCart();
  }

  getAuthSub(): void {
    this.authService.authSub.subscribe(res => {
      this.userData = this.authService.getUser();
      // console.log(this.userData);
    })
  }

  getCart(): void {
    this.cartService.cartSub.subscribe(res => {
      this.cartInfo = res;

      this.itemQuantity = 0;
      this.cartInfo.forEach((item: Product) => this.itemQuantity += item.quantity);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['user']);
  }
  search(){
    console.log('search called', this.query);
    if(this.query)
      this.router.navigateByUrl('search?q=' + this.query);
  }

}
