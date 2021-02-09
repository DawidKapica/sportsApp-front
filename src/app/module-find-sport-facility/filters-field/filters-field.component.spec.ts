import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFieldComponent } from './filters-field.component';

describe('FiltersFieldComponent', () => {
  let component: FiltersFieldComponent;
  let fixture: ComponentFixture<FiltersFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
