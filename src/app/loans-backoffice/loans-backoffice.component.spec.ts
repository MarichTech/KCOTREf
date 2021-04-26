import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoansBackofficeComponent } from './loans-backoffice.component';

describe('LoansBackofficeComponent', () => {
  let component: LoansBackofficeComponent;
  let fixture: ComponentFixture<LoansBackofficeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansBackofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
