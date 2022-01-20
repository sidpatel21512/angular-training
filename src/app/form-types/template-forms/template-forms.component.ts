import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent {

  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;

  onSubmit(form: any, formData: any) {
    console.log('submitted formdata', form);

    alert('Form submitted successfully');

    // form.reset();
  }

}
