import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNo: new FormControl(''),
    address: new FormControl(''),
    emailId:new FormControl(''),
    skills: new FormControl(''),
    designation: new FormControl('')
  })
  
  submitted: boolean;
  constructor(private formBuilder: FormBuilder) { }
mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', [Validators.required,  Validators.pattern]],
      address: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      skills: ['', Validators.required],
      designation: ['', Validators.required]
    });
}
get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
  

