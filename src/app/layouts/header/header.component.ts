import { Component } from '@angular/core';
import { LoginService } from 'src/app/pre-auth/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
    //   this.isLoggedIn = isLoggedIn;
    //   // this.username = this.login
    // });
  }

  logout(): void {
    this.loginService.logout();
  }
  search(){
    

  }

}
