import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceInfoComponent } from './sales-invoice-info.component';

describe('SalesInvoiceInfoComponent', () => {
  let component: SalesInvoiceInfoComponent;
  let fixture: ComponentFixture<SalesInvoiceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
