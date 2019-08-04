import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  theValue: string = "initial value from the model";

  constructor() { }

  ngOnInit() {
  }

  getTheInput(event: Event) {
    const theInputTarget = <HTMLInputElement> event.target;
    this.theValue = theInputTarget.value;
    console.log(this.theValue);
  }

}
