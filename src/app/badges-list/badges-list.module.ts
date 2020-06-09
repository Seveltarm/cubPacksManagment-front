import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { BadgesListRoutingModule } from './badges-list-routing.module';
import { BadgesListComponent } from './badges-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BadgesListComponent
  ],
  imports: [
    CommonModule,
    BadgesListRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class BadgesListModule { }
