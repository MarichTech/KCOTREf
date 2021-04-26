import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoanNominationsComponent } from './loan-nominations.component';

describe('LoanNominationsComponent', () => {
  let component: LoanNominationsComponent;
  let fixture: ComponentFixture<LoanNominationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanNominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
