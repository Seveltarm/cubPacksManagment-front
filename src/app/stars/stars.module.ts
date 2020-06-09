import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './stars.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StarsComponent,
  ],
  imports: [
    CommonModule,
    StarsRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class StarsModule { }
