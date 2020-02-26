import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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
      console.log('zalogowano', res);
    });
  }

}
