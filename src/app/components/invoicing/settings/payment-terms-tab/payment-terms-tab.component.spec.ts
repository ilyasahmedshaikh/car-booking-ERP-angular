import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsTabComponent } from './payment-terms-tab.component';

describe('PaymentTermsTabComponent', () => {
  let component: PaymentTermsTabComponent;
  let fixture: ComponentFixture<PaymentTermsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTermsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
