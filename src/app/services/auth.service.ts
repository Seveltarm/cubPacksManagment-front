import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggedIn = new Subject();

  constructor() { }

  // TODO: temporary solution, add backend support at later date, CAN'T LEAVE IT LIKE THIS!!!!
  public logInUser() {
    sessionStorage.setItem('packAppUserLoggedIn', 'true');
    this.isUserLoggedIn.next(true);
  }

  public isLoggedIn(): boolean {
    if (sessionStorage.getItem('packAppUserLoggedIn')) {
      this.isUserLoggedIn.next(true);
      return true;
    }

    return false;
  }
}
