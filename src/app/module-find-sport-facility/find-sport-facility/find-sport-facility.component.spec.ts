import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSportFacilityComponent } from './find-sport-facility.component';

describe('FindSportFacilityComponent', () => {
  let component: FindSportFacilityComponent;
  let fixture: ComponentFixture<FindSportFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSportFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
