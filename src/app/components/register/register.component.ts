import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup({
    First_name: new FormControl(''),
    Last_name: new FormControl(''),
    Address: new FormControl(''),
    MobileNo: new FormControl(''),
    Designation: new FormControl(''),
    DateOfJoining: new FormControl(''),
  })
  constructor() { }
  onSubmit(){
    console.log(this.loginForm.value);
  }
  ngOnInit() {
  }

}
