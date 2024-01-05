import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
      alert('Welcome ' + res.firstName + ' ' + res.lastName);
    }, err => {
      console.log(err);
      alert(err.error.message);
    })
  }

}
