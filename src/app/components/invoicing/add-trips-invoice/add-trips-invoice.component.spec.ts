import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripsInvoiceComponent } from './add-trips-invoice.component';

describe('AddTripsInvoiceComponent', () => {
  let component: AddTripsInvoiceComponent;
  let fixture: ComponentFixture<AddTripsInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTripsInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
