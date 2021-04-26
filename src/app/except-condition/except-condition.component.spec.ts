import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptConditionComponent } from './except-condition.component';

describe('ExceptConditionComponent', () => {
  let component: ExceptConditionComponent;
  let fixture: ComponentFixture<ExceptConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
