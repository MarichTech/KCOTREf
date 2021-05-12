import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityClientsComponent } from './entity-clients.component';

describe('EntityClientsComponent', () => {
  let component: EntityClientsComponent;
  let fixture: ComponentFixture<EntityClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
