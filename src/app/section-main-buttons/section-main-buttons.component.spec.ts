import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMainButtonsComponent } from './section-main-buttons.component';

describe('SectionMainButtonsComponent', () => {
  let component: SectionMainButtonsComponent;
  let fixture: ComponentFixture<SectionMainButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMainButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
