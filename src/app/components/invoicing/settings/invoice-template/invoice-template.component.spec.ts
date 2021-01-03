import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplateComponent } from './invoice-template.component';

describe('InvoiceTemplateComponent', () => {
  let component: InvoiceTemplateComponent;
  let fixture: ComponentFixture<InvoiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
