import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreNominationsComponent } from './pre-nominations.component';

describe('PreNominationsComponent', () => {
  let component: PreNominationsComponent;
  let fixture: ComponentFixture<PreNominationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreNominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
