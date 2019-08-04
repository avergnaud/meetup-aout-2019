import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form4-validation',
  templateUrl: './form4-validation.component.html',
  styleUrls: ['./form4-validation.component.scss']
})
export class Form4ValidationComponent implements OnInit {

  @ViewChild('myForm', {static:false}) myForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.myForm.value.email + ", " + this.myForm.value.amount);
  }

}
