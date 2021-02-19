import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRateOptionModalComponent } from './add-rate-option-modal.component';

describe('AddRateOptionModalComponent', () => {
  let component: AddRateOptionModalComponent;
  let fixture: ComponentFixture<AddRateOptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRateOptionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRateOptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
