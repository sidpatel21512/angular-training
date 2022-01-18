import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/directives/attributes',
    pathMatch: 'full'
  }, {
    path: 'attributes',
    component: AttributeDirectiveComponent
  }, {
    path: 'structural',
    component: StructuralDirectiveComponent
  }, {
    path: 'custom',
    component: CustomDirectiveComponent
  }
];

@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    CustomDirectiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class DirectiveTypesModule { }
