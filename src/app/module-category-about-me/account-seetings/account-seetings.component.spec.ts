import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSeetingsComponent } from './account-seetings.component';

describe('AccountSeetingsComponent', () => {
  let component: AccountSeetingsComponent;
  let fixture: ComponentFixture<AccountSeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
