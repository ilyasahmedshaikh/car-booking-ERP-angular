import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatePayReportComponent } from './affiliate-pay-report.component';

describe('AffiliatePayReportComponent', () => {
  let component: AffiliatePayReportComponent;
  let fixture: ComponentFixture<AffiliatePayReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatePayReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatePayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
