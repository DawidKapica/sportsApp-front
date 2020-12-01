import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesHistoryChartComponent } from './calories-history-chart.component';

describe('CaloriesHistoryChartComponent', () => {
  let component: CaloriesHistoryChartComponent;
  let fixture: ComponentFixture<CaloriesHistoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriesHistoryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
