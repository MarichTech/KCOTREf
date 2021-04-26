import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPendingApprovalComponent } from './applications-pending-approval.component';

describe('ApplicationsPendingApprovalComponent', () => {
  let component: ApplicationsPendingApprovalComponent;
  let fixture: ComponentFixture<ApplicationsPendingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsPendingApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
