import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedApplicationComponent } from './view-detailed-application.component';

describe('ViewDetailedApplicationComponent', () => {
  let component: ViewDetailedApplicationComponent;
  let fixture: ComponentFixture<ViewDetailedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
