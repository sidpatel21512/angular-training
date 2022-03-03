import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardsRoutingModule } from './guards-routing.module';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './can-activate/can-activate.component';


@NgModule({
  declarations: [
    GuardsComponent,
    CanActivateComponent
  ],
  imports: [
    CommonModule,
    GuardsRoutingModule
  ]
})
export class GuardsModule { }
