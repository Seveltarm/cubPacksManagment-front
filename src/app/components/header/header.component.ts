import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public displayHeader: boolean;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.auth.isUserLoggedIn.subscribe((isLogged: boolean) => this.displayHeader = isLogged);
  }

}
