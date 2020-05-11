import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';

import { BadgesListRoutingModule } from './badges-list-routing.module';
import { BadgesListComponent } from './badges-list.component';
import { ListComponent } from './../components/list/list.component';
import { SearchComponent } from './../components/search/search.component';


@NgModule({
  declarations: [
    BadgesListComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BadgesListRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule
  ]
})
export class BadgesListModule { }
