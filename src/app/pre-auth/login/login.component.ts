import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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

}
