import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaseaureChartHistoryFieldComponent } from './measeaure-chart-history-field.component';

describe('MeaseaureChartHistoryFieldComponent', () => {
  let component: MeaseaureChartHistoryFieldComponent;
  let fixture: ComponentFixture<MeaseaureChartHistoryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeaseaureChartHistoryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaseaureChartHistoryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
