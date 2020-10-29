import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMainCategoryViewComponent } from './section-main-category-view.component';

describe('SectionMainCategoryViewComponent', () => {
  let component: SectionMainCategoryViewComponent;
  let fixture: ComponentFixture<SectionMainCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMainCategoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
