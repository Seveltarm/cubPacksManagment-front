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
  public mail: String;
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
      this.router.navigate(['/badges-list']);
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
        user(mail: "${formControls.email}", password: "${formControls.password}") {
          name,
          surname,
          mail
        }
      }`
    }).subscribe(res => {
      this.auth.logInUser();
      this.router.navigate(['/badges-list']);
      console.log('zalogowano', res);
    });
  }

}
