import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './on-changes/display/display.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hooks/onchanges',
    pathMatch: 'full'
  }, {
    path: 'onchanges',
    component: OnChangesComponent
  }
];

@NgModule({
  declarations: [
    OnChangesComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class LifeCycleHooksModule { }
