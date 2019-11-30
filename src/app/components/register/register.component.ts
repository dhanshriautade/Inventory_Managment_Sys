import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    emailId:new FormControl(''),
    skills: new FormControl(''),
    designation: new FormControl(''),
    dateOfJoining: new FormControl(''),
  })
  constructor() { }
  onSubmit(){
    console.log(this.registerForm.value);
    // this.TeamService.Signup(this.registerForm.value).subscribe(res => {
    // });
  }
  ngOnInit() {
  }

}
