import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './services/can-activate.guard';

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
  {
    path: 'nesting-routes',
    loadChildren: () => import('./nesting-routes/nesting-routes.module').then(m => m.NestingRoutesModule)
  },
  {
    path: 'preloadcomponentdata',
    loadChildren: () => import('./preload-component-data/preload-component-data.module').then(m => m.PreloadComponentDataModule)
  },
  {
    path: 'guards',
    loadChildren: () => import('./guards/guards.module').then(m => m.GuardsModule),
    canActivate: [CanActivateGuard],
    // canLoad: [CanLoadGuard]
  }
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
