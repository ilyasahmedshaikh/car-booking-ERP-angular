import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidComponent } from './paid.component';

describe('PaidComponent', () => {
  let component: PaidComponent;
  let fixture: ComponentFixture<PaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
