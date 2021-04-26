import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NominateGuarantorsComponent } from './nominate-guarantors.component';

describe('NominateGuarantorsComponent', () => {
  let component: NominateGuarantorsComponent;
  let fixture: ComponentFixture<NominateGuarantorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NominateGuarantorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominateGuarantorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
