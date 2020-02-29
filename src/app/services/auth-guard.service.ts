import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(
    public auth: AuthService, 
    public router: Router
  ) {}

  canLoad(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
