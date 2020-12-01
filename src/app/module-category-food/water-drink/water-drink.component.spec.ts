import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDrinkComponent } from './water-drink.component';

describe('WaterDrinkComponent', () => {
  let component: WaterDrinkComponent;
  let fixture: ComponentFixture<WaterDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
