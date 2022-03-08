import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard } from '../services/can-activate-child.guard';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentComponent } from './parent/parent.component';

const routes:Routes = [
  {
    path: '',
    component: ParentComponent,
    canActivateChild: [CanActivateChildGuard],
    children: [
      {
        path: 'child-a/:id', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b/:id',
        component: ChildBComponent, // another child route component that the router renders
      },
    ]
  }
];

@NgModule({
  declarations: [
    ParentComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class NestingRoutesModule { }
