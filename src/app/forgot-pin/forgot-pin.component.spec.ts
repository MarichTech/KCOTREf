import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgotPinComponent } from './forgot-pin.component';

describe('ForgotPinComponent', () => {
  let component: ForgotPinComponent;
  let fixture: ComponentFixture<ForgotPinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
