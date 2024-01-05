import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private lsService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl('')
    // });

    this.loginForm = this.fb.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', [Validators.required, Validators.minLength(7)]]
    });
  }

  onSubmit(loginForm: FormGroup): void {
    console.log(loginForm);

    this.authService.login(loginForm.value).subscribe((res: any) => {
      console.log(res);
      this.lsService.setData('authData', res);
      this.router.navigate(['client', 'profile']);
      // alert('Welcome ' + res.firstName + ' ' + res.lastName);
    }, err => {
      console.log(err);
      alert(err.error.message);
    })
  }

}
