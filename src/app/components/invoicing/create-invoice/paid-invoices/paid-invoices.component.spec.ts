import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidInvoicesComponent } from './paid-invoices.component';

describe('PaidInvoicesComponent', () => {
  let component: PaidInvoicesComponent;
  let fixture: ComponentFixture<PaidInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
