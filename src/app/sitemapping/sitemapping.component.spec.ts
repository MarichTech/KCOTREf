import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemappingComponent } from './sitemapping.component';

describe('SitemappingComponent', () => {
  let component: SitemappingComponent;
  let fixture: ComponentFixture<SitemappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
