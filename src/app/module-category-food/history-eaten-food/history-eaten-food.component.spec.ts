import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEatenFoodComponent } from './history-eaten-food.component';

describe('HistoryEatenFoodComponent', () => {
  let component: HistoryEatenFoodComponent;
  let fixture: ComponentFixture<HistoryEatenFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryEatenFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEatenFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
