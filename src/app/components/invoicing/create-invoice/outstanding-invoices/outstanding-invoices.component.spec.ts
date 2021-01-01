import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingInvoicesComponent } from './outstanding-invoices.component';

describe('OutstandingInvoicesComponent', () => {
  let component: OutstandingInvoicesComponent;
  let fixture: ComponentFixture<OutstandingInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
