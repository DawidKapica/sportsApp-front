import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddOpinionComponent } from './dialog-add-opinion.component';

describe('DialogAddOpinionComponent', () => {
  let component: DialogAddOpinionComponent;
  let fixture: ComponentFixture<DialogAddOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
