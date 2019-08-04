import { Component } from '@angular/core';

@Component({
  selector: 'app-ctrl',
  template: `
    <h3>control</h3>
    <input
      type="text"
      size="50"
      [(ngModel)]="theValue"
      #theForm="ngModel"
      required
      email
    >
    <p>{{ theValue }}</p>
    <p>valid: {{ theForm.valid }}</p>
  `,
  styles: [`
    .ng-invalid.ng-touched {
      border-color: red;
    }
  `]
})
export class CtrlComponent {
  theValue: string;
}
