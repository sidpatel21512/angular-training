import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }
    );

    // one can use following formBuilder syntax as well
    // this.registerForm = this.formBuilder.group(
    //   {
    //     firstName: ['', [Validators.required, Validators.minLength(6)]],
    //   }
    // );
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

}
