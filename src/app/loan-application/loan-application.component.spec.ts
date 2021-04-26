import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoanApplicationComponent } from './loan-application.component';

describe('LoansComponent', () => {
  let component: LoanApplicationComponent;
  let fixture: ComponentFixture<LoanApplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
