import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPaymentComponent } from './record-payment.component';

describe('RecordPaymentComponent', () => {
  let component: RecordPaymentComponent;
  let fixture: ComponentFixture<RecordPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
