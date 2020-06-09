import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service'

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'badges', loadChildren: () => import('./badges-list/badges-list.module').then(m => m.BadgesListModule), canLoad: [AuthGuard] },
  { path: 'stars', loadChildren: () => import('./stars/stars.module').then(m => m.StarsModule), canLoad: [AuthGuard]  },
  { path: '**', redirectTo: 'badges' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
