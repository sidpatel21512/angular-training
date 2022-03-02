import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadComponentDataResolverService } from './preload-component-data-resolver.service';
import { PreloadComponentDataComponent } from './preload-component-data.component';

const routes: Routes = [
  {
    path: '',
    component: PreloadComponentDataComponent,
    resolve: {
      componentData: PreloadComponentDataResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadComponentDataRoutingModule { }
