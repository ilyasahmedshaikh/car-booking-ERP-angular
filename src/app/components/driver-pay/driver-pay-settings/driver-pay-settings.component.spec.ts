import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPaySettingsComponent } from './driver-pay-settings.component';

describe('DriverPaySettingsComponent', () => {
  let component: DriverPaySettingsComponent;
  let fixture: ComponentFixture<DriverPaySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPaySettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPaySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
