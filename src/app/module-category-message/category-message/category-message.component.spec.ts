import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMessageComponent } from './category-message.component';

describe('CategoryMessageComponent', () => {
  let component: CategoryMessageComponent;
  let fixture: ComponentFixture<CategoryMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
