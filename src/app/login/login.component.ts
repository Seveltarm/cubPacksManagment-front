import { Component, OnInit } from '@angular/core';

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

  constructor(
    private apollo: Apollo
  ) {
  }

  ngOnInit(): void {
  }

  public logIn() {
    this.apollo.query({
      query: gql `{ 
        user(mail: "${this.mail}", password: "${this.password}") {
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
