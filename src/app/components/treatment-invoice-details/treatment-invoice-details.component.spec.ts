import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentInvoiceDetailsComponent } from './treatment-invoice-details.component';

describe('TreatmentInvoiceDetailsComponent', () => {
  let component: TreatmentInvoiceDetailsComponent;
  let fixture: ComponentFixture<TreatmentInvoiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentInvoiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
