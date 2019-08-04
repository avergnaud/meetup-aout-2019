import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.scss']
})
export class ReactiveForm2Component implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'amount': new FormControl(0, [this.forbiddenAmountsValidator])
    });
  }

  forbiddenAmountsValidator(control: FormControl): {[cle: string]: boolean} {
    if(control.value < 0) {
      return { 'amountIsNegative': true }
    }
    // cas OK
    return null;
  }

  onAdd() {
    console.log(this.myForm.value);
  }

}
