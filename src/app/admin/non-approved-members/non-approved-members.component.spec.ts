import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NonApprovedMembersComponent } from './non-approved-members.component';

describe('NonApprovedMembersComponent', () => {
  let component: NonApprovedMembersComponent;
  let fixture: ComponentFixture<NonApprovedMembersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NonApprovedMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonApprovedMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
