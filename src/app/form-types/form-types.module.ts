import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/forms/template-driven',
    pathMatch: 'full'
  }, {
    path: 'template-driven',
    component: TemplateFormsComponent
  }, {
    path: 'reactive',
    component: ReactiveFormsComponent
  }, {
    path: 'dynamic',
    component: TemplateFormsComponent
  }
];

@NgModule({
  declarations: [
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormTypesModule { }
