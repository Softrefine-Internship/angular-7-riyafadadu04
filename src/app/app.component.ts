import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface dynamicFormJson {
  type: string;
  label: string;
  isVisible: boolean;
  isRequired: boolean;
  errorMessage: string;
  hint: string;
  value: string | boolean | number;
  options?: (string | boolean | number)[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm!: FormGroup;

  formJson: dynamicFormJson[] = [
    {
      type: 'text',
      label: 'Name',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Enter valid name',
      hint: 'Enter your full name',
      value: '',
    },
    {
      type: 'number',
      label: 'Age',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Enter valid Age',
      hint: '',
      value: '',
    },
    {
      type: 'range',
      label: 'Rate',
      isVisible: true,
      isRequired: false,
      errorMessage: 'Enter valid Range',
      hint: '',
      value: 5,
      options: [1, 10],
    },
    {
      type: 'dropdown',
      label: 'Gender',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Gender is required',
      hint: 'Select your gender',
      value: '',
      options: ['Male', 'Female'],
    },
    {
      type: 'textarea',
      label: 'address',
      isVisible: true,
      isRequired: false,
      errorMessage: '',
      hint: 'Enter Your Address',
      value: '',
    },
    {
      type: 'checkbox',
      label: 'agree',
      isVisible: true,
      isRequired: true,
      errorMessage: 'You must agree to terms',
      hint: 'I agree to the terms and conditions',
      value: false,
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({});

    this.formJson.forEach((field) => {
      const validators = [];
      if (field.isRequired) {
        if (field.type === 'checkbox') {
          validators.push(Validators.requiredTrue);
        }
        validators.push(Validators.required);
      }

      this.registerForm.addControl(
        field.label,
        this.formBuilder.control(field.value, validators)
      );
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
