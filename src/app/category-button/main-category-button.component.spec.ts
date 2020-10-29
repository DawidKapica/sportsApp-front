import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryButtonComponent } from './main-category-button.component';

describe('MainCategoryButtonComponent', () => {
  let component: MainCategoryButtonComponent;
  let fixture: ComponentFixture<MainCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
