import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../services/can-deactivate.guard';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { GuardsComponent } from './guards.component';

const routes: Routes = [
  {
    path: '',
    component: GuardsComponent
  }, {
    path: 'canactivate',
    component: CanActivateComponent,
  }, {
    path: 'candeactivate',
    component: CanActivateComponent,
    canDeactivate: [CanDeactivateGuard]
  }, {
    path: 'canload',
    component: GuardsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
