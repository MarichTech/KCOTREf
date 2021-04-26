import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangePINComponent } from './change-pin.component';

describe('ChangePINComponent', () => {
  let component: ChangePINComponent;
  let fixture: ComponentFixture<ChangePINComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
