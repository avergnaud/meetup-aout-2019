# Meetup août 2019

## introduction au binding

https://github.com/avergnaud/knockoutjs-like-binding

## introduction à [(ngModel)]

https://github.com/avergnaud/appModel

## avec ngModel

### binding propriété par propriété

form1.component
```
[(ngModel)]="email"
[(ngModel)]="amount"
```

### template variable, ngModel, ViewChild

form4.component, form4-validation.component
```
<form #myForm="ngForm" (ngSubmit)="onAdd()">
name="email"
ngModel
@ViewChild('myForm', { static: false}) myForm: NgForm;
```

### template variable, ngModel

form5.component
```
<form #myForm="ngForm" (ngSubmit)="onAdd(myForm)">
name="email"
ngModel
```

## sans ngModel

### template variables

form2.component
```
#emailInput
<button class="btn btn-success" (click)="onAdd(emailInput, amountInput)">
```

### template variables, ViewChild

form3.component
```
#emailInput
<button class="btn btn-success" (click)="onAdd()">
@ViewChild('emailInput', { static: false }) emailInput: ElementRef;
```

### reactive forms

reactive-form1.component, reactive-form2.component
```
<form [formGroup]="myForm" (ngSubmit)="onAdd()">
formControlName="email"
this.myForm = new FormGroup({
  'email': new FormControl(null, [Validators.required, Validators.email]),
  'amount': new FormControl(null)
});
```