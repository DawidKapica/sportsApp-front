import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsFieldComponent } from './goals-field.component';

describe('GoalsFieldComponent', () => {
  let component: GoalsFieldComponent;
  let fixture: ComponentFixture<GoalsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
