import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  @ViewChild('emailInput', { static: false }) emailInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.emailInput.nativeElement.value
      + ", "
      + this.amountInput.nativeElement.value)
  }
}
