import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoanResultComponent } from './loan-result.component';

describe('LoanResultComponent', () => {
  let component: LoanResultComponent;
  let fixture: ComponentFixture<LoanResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
