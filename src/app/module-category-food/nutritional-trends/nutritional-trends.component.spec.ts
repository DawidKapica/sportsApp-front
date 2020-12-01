import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalTrendsComponent } from './nutritional-trends.component';

describe('NutritionalTrendsComponent', () => {
  let component: NutritionalTrendsComponent;
  let fixture: ComponentFixture<NutritionalTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionalTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionalTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
