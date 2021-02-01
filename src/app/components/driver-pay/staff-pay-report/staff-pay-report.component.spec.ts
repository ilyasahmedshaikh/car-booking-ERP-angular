import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPayReportComponent } from './staff-pay-report.component';

describe('StaffPayReportComponent', () => {
  let component: StaffPayReportComponent;
  let fixture: ComponentFixture<StaffPayReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPayReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
