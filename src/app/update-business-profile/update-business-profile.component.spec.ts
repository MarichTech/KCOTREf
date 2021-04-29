import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessProfileComponent } from './update-business-profile.component';

describe('UpdateBusinessProfileComponent', () => {
  let component: UpdateBusinessProfileComponent;
  let fixture: ComponentFixture<UpdateBusinessProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusinessProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
