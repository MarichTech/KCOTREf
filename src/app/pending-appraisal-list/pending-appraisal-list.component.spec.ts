import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAppraisalListComponent } from './pending-appraisal-list.component';

describe('PendingAppraisalListComponent', () => {
  let component: PendingAppraisalListComponent;
  let fixture: ComponentFixture<PendingAppraisalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAppraisalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAppraisalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
