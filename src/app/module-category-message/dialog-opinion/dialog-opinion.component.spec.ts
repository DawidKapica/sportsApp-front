import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpinionComponent } from './dialog-opinion.component';

describe('DialogOpinionComponent', () => {
  let component: DialogOpinionComponent;
  let fixture: ComponentFixture<DialogOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
