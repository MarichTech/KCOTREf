import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPendingDisbursementComponent } from './applications-pending-disbursement.component';

describe('ApplicationsPendingDisbursementComponent', () => {
  let component: ApplicationsPendingDisbursementComponent;
  let fixture: ComponentFixture<ApplicationsPendingDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsPendingDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPendingDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
