import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendMessageComponent } from './dialog-send-message.component';

describe('DialogSendMessageComponent', () => {
  let component: DialogSendMessageComponent;
  let fixture: ComponentFixture<DialogSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSendMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
