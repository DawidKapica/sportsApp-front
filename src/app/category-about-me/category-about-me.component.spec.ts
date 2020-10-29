import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAboutMeComponent } from './category-about-me.component';

describe('CategoryAboutMeComponent', () => {
  let component: CategoryAboutMeComponent;
  let fixture: ComponentFixture<CategoryAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
