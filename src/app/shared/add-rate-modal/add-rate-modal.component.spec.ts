import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRateModalComponent } from './add-rate-modal.component';

describe('AddRateModalComponent', () => {
  let component: AddRateModalComponent;
  let fixture: ComponentFixture<AddRateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
