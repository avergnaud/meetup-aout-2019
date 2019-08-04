import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {

  email: string;
  amount: number;

  constructor() { }

  onAdd() {
    console.log(this.email + ", " + this.amount);
  }

}
