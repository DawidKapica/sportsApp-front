import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsFieldCardComponent } from './goals-field-card.component';

describe('GoalsFieldCardComponent', () => {
  let component: GoalsFieldCardComponent;
  let fixture: ComponentFixture<GoalsFieldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsFieldCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsFieldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
