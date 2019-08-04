import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { Form1Component } from './form1/form1.component';
import { CtrlComponent } from './ctrl/ctrl.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form4ValidationComponent } from './form4-validation/form4-validation.component';
import { Form5Component } from './form5/form5.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Form1Component,
    CtrlComponent,
    Form2Component,
    Form3Component,
    Form4Component,
    Form4ValidationComponent,
    Form5Component,
    ReactiveForm1Component,
    ReactiveForm2Component,
    DynamicFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
