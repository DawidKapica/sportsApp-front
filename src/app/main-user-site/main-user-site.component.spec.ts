import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserSiteComponent } from './main-user-site.component';

describe('MainUserSiteComponent', () => {
  let component: MainUserSiteComponent;
  let fixture: ComponentFixture<MainUserSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUserSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUserSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
