import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteModeComponent } from './site-mode.component';

describe('SiteModeComponent', () => {
  let component: SiteModeComponent;
  let fixture: ComponentFixture<SiteModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
