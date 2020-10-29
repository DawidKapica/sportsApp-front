import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDiagramsComponent } from './main-diagrams.component';

describe('MainDiagramsComponent', () => {
  let component: MainDiagramsComponent;
  let fixture: ComponentFixture<MainDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDiagramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
