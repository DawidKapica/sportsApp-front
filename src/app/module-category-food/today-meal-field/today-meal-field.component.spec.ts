import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMealFieldComponent } from './today-meal-field.component';

describe('TodayMealFieldComponent', () => {
  let component: TodayMealFieldComponent;
  let fixture: ComponentFixture<TodayMealFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayMealFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMealFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
