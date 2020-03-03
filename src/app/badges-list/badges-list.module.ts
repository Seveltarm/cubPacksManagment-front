import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { BadgesListRoutingModule } from './badges-list-routing.module';
import { BadgesListComponent } from './badges-list.component';
import { ListComponent } from './../components/list/list.component'


@NgModule({
  declarations: [
    BadgesListComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BadgesListRoutingModule,
    MatTabsModule,
  ]
})
export class BadgesListModule { }
