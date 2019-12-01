import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationFormComponent } from './new-registration-form.component';

describe('NewRegistrationFormComponent', () => {
  let component: NewRegistrationFormComponent;
  let fixture: ComponentFixture<NewRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
