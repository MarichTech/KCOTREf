import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualClientsComponent } from './individual-clients.component';

describe('IndividualClientsComponent', () => {
  let component: IndividualClientsComponent;
  let fixture: ComponentFixture<IndividualClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
