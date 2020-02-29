import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgesListComponent } from './badges-list.component';

const routes: Routes = [{ path: '', component: BadgesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesListRoutingModule { }
