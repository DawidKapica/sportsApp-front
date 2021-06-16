import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoExpertComponent } from './dialog-info-expert.component';

describe('DialogInfoExpertComponent', () => {
  let component: DialogInfoExpertComponent;
  let fixture: ComponentFixture<DialogInfoExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInfoExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
