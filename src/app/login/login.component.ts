import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { AuthService } from './../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: String;
  public password: String;
  public loginForm: FormGroup;

  constructor(
    private apollo: Apollo,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/badges']);
    }
    this.loginForm = this.formBuilder.group({
      email : [null, Validators.required],
      password : [null, Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  public logIn(formControls) {
    this.apollo.query({
      query: gql `{ 
        user(email: "${formControls.email}", password: "${formControls.password}") {
          name,
          surname,
          email
        }
      }`
    }).subscribe(res => {
      this.auth.logInUser();
      this.router.navigate(['/badges']);
      console.log('zalogowano', res);
    });
  }

}
