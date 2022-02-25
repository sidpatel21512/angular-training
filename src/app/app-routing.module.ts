import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hooks',
    loadChildren: () => import('./life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directive-types/directive-types.module').then(m => m.DirectiveTypesModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./form-types/form-types.module').then(m => m.FormTypesModule)
  },
  // {path: '', redirectTo: '/hooks', pathMatch: 'full'},
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
