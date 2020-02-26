import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const submitUser = gql`
mutation addUser(
    $email: String!,
    $password: String!,
    $name: String!,
    $surname: String!,
    $pack: String!
  ) {
  addUser(
    email: $email,
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
  public registerForm: FormGroup;

  constructor(
    private apollo: Apollo,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email : [null, Validators.required],
      password : [null, Validators.required]
    });
  }

  public registerUser(formControls) {
    this.apollo.mutate({
      mutation: submitUser,
      variables: {
        email: formControls.email,
        password: formControls.password,
        name: formControls.name,
        surname: formControls.surname,
        pack: formControls.pack
      }
    }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('error')
    });
  }
}
