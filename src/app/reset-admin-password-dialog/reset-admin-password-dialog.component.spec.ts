import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAdminPasswordDialogComponent } from './reset-admin-password-dialog.component';

describe('ResetAdminPasswordDialogComponent', () => {
  let component: ResetAdminPasswordDialogComponent;
  let fixture: ComponentFixture<ResetAdminPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetAdminPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAdminPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
