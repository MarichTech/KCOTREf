import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppraisalComponent } from './loan-appraisal.component';

describe('LoanAppraisalComponent', () => {
  let component: LoanAppraisalComponent;
  let fixture: ComponentFixture<LoanAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
