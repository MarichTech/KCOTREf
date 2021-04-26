import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuaratorsComponent } from './guarators.component';

describe('GuaratorsComponent', () => {
  let component: GuaratorsComponent;
  let fixture: ComponentFixture<GuaratorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
