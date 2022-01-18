import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapsLockDirective } from './directives/caps-lock.directive';



@NgModule({
  declarations: [
    CapsLockDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapsLockDirective
  ]
})
export class SharedModule { }
