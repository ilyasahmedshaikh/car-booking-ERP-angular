import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoicesComponent } from './create-invoices.component';

describe('CreateInvoicesComponent', () => {
  let component: CreateInvoicesComponent;
  let fixture: ComponentFixture<CreateInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
