import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPayReportComponent } from './driver-pay-report.component';

describe('DriverPayReportComponent', () => {
  let component: DriverPayReportComponent;
  let fixture: ComponentFixture<DriverPayReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPayReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
