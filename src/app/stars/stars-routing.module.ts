import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarsComponent } from './stars.component';

const routes: Routes = [{ path: '', component: StarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarsRoutingModule { }
