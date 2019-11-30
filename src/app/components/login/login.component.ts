import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    
  })


  constructor(private router: Router,) { }

  SignUp(){
    this.router.navigate(['/register']);
  }

onSubmit(){
  console.log(this.loginForm.value);
  this.router.navigate(['/Main']);
}
  ngOnInit() {
  }

}
