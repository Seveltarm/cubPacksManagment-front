import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public displayHeader: boolean;
  public isSideNavOpen: boolean;

  @Output() toggleSideNav = new EventEmitter();

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.isUserLoggedIn.subscribe((isLogged: boolean) => this.displayHeader = isLogged);
  }

  public changeSideNavState(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.toggleSideNav.emit(this.isSideNavOpen);
  }

}
