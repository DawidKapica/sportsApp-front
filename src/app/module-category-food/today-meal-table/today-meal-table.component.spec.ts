import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMealTableComponent } from './today-meal-table.component';

describe('TodayMealTableComponent', () => {
  let component: TodayMealTableComponent;
  let fixture: ComponentFixture<TodayMealTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayMealTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayMealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
