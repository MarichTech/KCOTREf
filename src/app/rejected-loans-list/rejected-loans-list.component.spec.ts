import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedLoansListComponent } from './rejected-loans-list.component';

describe('RejectedLoansListComponent', () => {
  let component: RejectedLoansListComponent;
  let fixture: ComponentFixture<RejectedLoansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedLoansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedLoansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
