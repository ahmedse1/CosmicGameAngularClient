import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartHoldersRoutingModule } from './chart-holders-routing.module';
import { ChartHoldersComponent } from './chart-holders.component';


@NgModule({
  declarations: [ChartHoldersComponent],
  imports: [
    CommonModule,
    ChartHoldersRoutingModule
  ]
})
export class ChartHoldersModule { }
