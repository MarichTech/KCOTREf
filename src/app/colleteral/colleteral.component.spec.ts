import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColleteralComponent } from './colleteral.component';

describe('ColleteralComponent', () => {
  let component: ColleteralComponent;
  let fixture: ComponentFixture<ColleteralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
