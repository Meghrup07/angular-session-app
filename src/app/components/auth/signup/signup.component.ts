import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singupForm!: FormGroup;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getSingupForm()
  }

  getSingupForm() {
    this.singupForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    })
  }


  singup() {
    const existingSignupDataString = sessionStorage.getItem('singupData');
    let existingSignupData = [];
    if (existingSignupDataString) {
      existingSignupData = JSON.parse(existingSignupDataString);
      if (!Array.isArray(existingSignupData)) {
        existingSignupData = [existingSignupData];
      }
    }
    const newSignupFormData = this.singupForm.value;
    const updatedSignupData = existingSignupData.concat(newSignupFormData);
    sessionStorage.setItem('singupData', JSON.stringify(updatedSignupData));
    this.singupForm.reset();
    alert("Signup Successful!");
  }


  login() {
    this.route.navigate(['auth/login'])
  }

}
