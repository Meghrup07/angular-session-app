import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getLoginForm()
  }

  getLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  login() {
    let token: string;
    const loginFormData = this.loginForm.value;
    const signupDataString = sessionStorage.getItem('singupData');
    if (signupDataString) {
      const signupData = JSON.parse(signupDataString);
      const user = signupData.find((user: any) => user.email === loginFormData.email);
      if (user && user.password === loginFormData.password) {
        token = "userToken";
        alert("Login Successful!");
        this.route.navigate(['dashboard']);
      } else {
        alert("Invalid email or password. Please try again.");
        token = "";
      }
    } else {
      alert("No user registered. Please sign up first.");
      token = "";
    }
    sessionStorage.setItem("token", token);
  }

  singup() {
    this.route.navigate(['auth/singup'])
  }

}
