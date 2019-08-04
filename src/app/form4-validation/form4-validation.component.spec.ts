import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form4ValidationComponent } from './form4-validation.component';

describe('Form4ValidationComponent', () => {
  let component: Form4ValidationComponent;
  let fixture: ComponentFixture<Form4ValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form4ValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4ValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
