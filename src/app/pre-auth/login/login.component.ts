import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string=''
  
  loginForm!: FormGroup;


  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit(): void{
    this.loginForm= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    this.loginForm.get('email')?.statusChanges.subscribe(data => { 
      console.log(data);
    })
    this.loginForm.get('password')?.statusChanges.subscribe(data => { 
      console.log(data);
    })
  }
  addCustomerForm(formvalue:NgForm){

  }

  // this.loginForm.get('email')?.statusChanges.subscribe(data => { 
  //   console.log(data);
  // })
  // this.loginForm.stateChanges.subscribe(data=>{
  //   console.log(data);
  // }
  trackEmail(){
    this.loginForm.get('email')?.valueChanges.subscribe(data=>{
      console.log(data);
    })
  }


 

  onLoginSuccess(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.router.navigate(['/']);
      this.loginService.login();
    }
    
  }

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
