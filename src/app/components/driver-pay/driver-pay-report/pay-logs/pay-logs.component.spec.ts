import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayLogsComponent } from './pay-logs.component';

describe('PayLogsComponent', () => {
  let component: PayLogsComponent;
  let fixture: ComponentFixture<PayLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
