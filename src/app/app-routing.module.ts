import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path:'intro', component:IntroComponent },
  { path:'ctrl', component:CtrlComponent },
  { path:'form1', component:Form1Component },
  { path:'form2', component:Form2Component },
  { path:'form3', component:Form3Component },
  { path:'form4', component:Form4Component },
  { path:'form4-validation', component:Form4ValidationComponent },
  { path:'form5', component:Form5Component },
  { path:'reactive-form1', component:ReactiveForm1Component },
  { path:'reactive-form2', component:ReactiveForm2Component },
  { path:'dynamic-forms', component:DynamicFormsComponent},
  { path:'**', redirectTo:'intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
