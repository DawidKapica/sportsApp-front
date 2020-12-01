import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductFieldComponent } from './search-product-field.component';

describe('SearchProductFieldComponent', () => {
  let component: SearchProductFieldComponent;
  let fixture: ComponentFixture<SearchProductFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
