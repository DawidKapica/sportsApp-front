import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdiExpertInfoComponent } from './dialog-edi-expert-info.component';

describe('DialogEdiExpertInfoComponent', () => {
  let component: DialogEdiExpertInfoComponent;
  let fixture: ComponentFixture<DialogEdiExpertInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdiExpertInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdiExpertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
