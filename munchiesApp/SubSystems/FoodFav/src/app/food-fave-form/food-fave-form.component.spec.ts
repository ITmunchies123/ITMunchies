import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFaveFormComponent } from './food-fave-form.component';

describe('FoodFaveFormComponent', () => {
  let component: FoodFaveFormComponent;
  let fixture: ComponentFixture<FoodFaveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFaveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
