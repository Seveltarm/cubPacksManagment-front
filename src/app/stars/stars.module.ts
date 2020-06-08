import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './stars.component';


@NgModule({
  declarations: [StarsComponent],
  imports: [
    CommonModule,
    StarsRoutingModule
  ]
})
export class StarsModule { }
