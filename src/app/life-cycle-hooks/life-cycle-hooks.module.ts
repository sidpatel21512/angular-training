import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AfterViewCheckedComponent } from './after-view-checked/after-view-checked.component';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
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
  }, {
    path: 'afterviewinit',
    component: AfterViewInitComponent
  }, {
    path: 'afterviewchecked',
    component: AfterViewCheckedComponent
  }
];

@NgModule({
  declarations: [
    OnChangesComponent,
    DisplayComponent,
    AfterViewInitComponent,
    AfterViewCheckedComponent
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
