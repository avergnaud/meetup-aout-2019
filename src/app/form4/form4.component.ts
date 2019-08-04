import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  @ViewChild('myForm', { static: true}) myForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const email = this.myForm.value.email;
    const amount = this.myForm.value.amount;
    console.log(email + ', ' + amount);
  }

}
