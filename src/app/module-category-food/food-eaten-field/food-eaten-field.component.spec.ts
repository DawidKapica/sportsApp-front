import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEatenFieldComponent } from './food-eaten-field.component';

describe('FoodEatenFieldComponent', () => {
  let component: FoodEatenFieldComponent;
  let fixture: ComponentFixture<FoodEatenFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodEatenFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodEatenFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
