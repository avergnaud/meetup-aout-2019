import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.scss']
})
export class ReactiveForm1Component implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'amount': new FormControl(null)
    });
  }

  onAdd() {
    console.log(this.myForm.value);
  }

}
