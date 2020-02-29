import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // TODO: temporary solution, add backend support at later date, CAN'T LEAVE IT LIKE THIS!!!!
  public logInUser() {
    sessionStorage.setItem('packAppUserLoggedIn', 'true');
  }

  public isLoggedIn(): boolean {
    if (sessionStorage.getItem('packAppUserLoggedIn')) {
      return true;
    }

    return false;
  }
}
