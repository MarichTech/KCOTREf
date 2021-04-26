import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedLoanApplicationComponent } from './view-detailed-loan-application.component';

describe('ViewDetailedLoanApplicationComponent', () => {
  let component: ViewDetailedLoanApplicationComponent;
  let fixture: ComponentFixture<ViewDetailedLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailedLoanApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailedLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
