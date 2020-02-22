import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const submitUser = gql`
mutation addUser(
    $mail: String!,
    $password: String!,
    $name: String!,
    $surname: String!,
    $pack: String!
  ) {
  addUser(
    mail: $mail,
    password: $password,
    name: $name,
    surname: $surname,
    pack: $pack) {
    _id
  }
}`

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public mail: String;
  public password: String;
  public name: String;
  public surname: String;
  public pack: String;
  

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this.apollo.mutate({
      mutation: submitUser,
      variables: {
        mail: this.mail,
        password: this.password,
        name: this.name,
        surname: this.surname,
        pack: this.pack
      }
    }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('error')
    });
  }
}
