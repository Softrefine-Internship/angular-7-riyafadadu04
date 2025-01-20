import { Component } from '@angular/core';

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
export class AppComponent {
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
      type: 'checkbox',
      label: 'agree',
      isVisible: true,
      isRequired: true,
      errorMessage: 'You must agree to terms',
      hint: '',
      value: false,
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
  ];
}
