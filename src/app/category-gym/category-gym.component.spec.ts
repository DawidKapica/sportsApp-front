import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGymComponent } from './category-gym.component';

describe('CategoryGymComponent', () => {
  let component: CategoryGymComponent;
  let fixture: ComponentFixture<CategoryGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
