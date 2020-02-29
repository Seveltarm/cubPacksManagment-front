import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesListRoutingModule } from './badges-list-routing.module';
import { BadgesListComponent } from './badges-list.component';


@NgModule({
  declarations: [BadgesListComponent],
  imports: [
    CommonModule,
    BadgesListRoutingModule
  ]
})
export class BadgesListModule { }
