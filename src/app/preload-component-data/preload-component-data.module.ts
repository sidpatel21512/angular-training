import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadComponentDataRoutingModule } from './preload-component-data-routing.module';
import { PreloadComponentDataComponent } from './preload-component-data.component';


@NgModule({
  declarations: [
    PreloadComponentDataComponent
  ],
  imports: [
    CommonModule,
    PreloadComponentDataRoutingModule
  ]
})
export class PreloadComponentDataModule { }
