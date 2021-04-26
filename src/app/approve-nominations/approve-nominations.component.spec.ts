import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApproveNominationsComponent } from './approve-nominations.component';

describe('ApproveNominationsComponent', () => {
  let component: ApproveNominationsComponent;
  let fixture: ComponentFixture<ApproveNominationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveNominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
