import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginService } from 'src/app/pre-auth/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userData: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getAuthSub();
  }

  getAuthSub(): void {
    this.authService.authSub.subscribe(res => {
      this.userData = this.authService.getUser();
      console.log(this.userData);
    })
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['user']);
  }
  search(){
  
  }

}
