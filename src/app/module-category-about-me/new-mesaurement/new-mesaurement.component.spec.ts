import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMesaurementComponent } from './new-mesaurement.component';

describe('NewMesaurementComponent', () => {
  let component: NewMesaurementComponent;
  let fixture: ComponentFixture<NewMesaurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMesaurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMesaurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
