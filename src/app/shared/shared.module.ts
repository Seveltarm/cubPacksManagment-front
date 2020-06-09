import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';

import { ListComponent } from './../components/list/list.component';
import { SearchComponent } from './../components/search/search.component';


@NgModule({
  declarations: [
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    ListComponent,
    SearchComponent
  ]
})
export class SharedModule { }
