import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayReportComponent } from './pay-report.component';

describe('PayReportComponent', () => {
  let component: PayReportComponent;
  let fixture: ComponentFixture<PayReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
