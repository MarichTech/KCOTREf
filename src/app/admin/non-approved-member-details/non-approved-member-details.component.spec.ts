import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NonApprovedMemberDetailsComponent } from './non-approved-member-details.component';

describe('NonApprovedMemberDetailsComponent', () => {
  let component: NonApprovedMemberDetailsComponent;
  let fixture: ComponentFixture<NonApprovedMemberDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NonApprovedMemberDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonApprovedMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
