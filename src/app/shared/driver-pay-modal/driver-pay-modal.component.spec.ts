import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPayModalComponent } from './driver-pay-modal.component';

describe('DriverPayModalComponent', () => {
  let component: DriverPayModalComponent;
  let fixture: ComponentFixture<DriverPayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
