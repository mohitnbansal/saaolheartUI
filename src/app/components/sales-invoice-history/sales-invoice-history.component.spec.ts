import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceHistoryComponent } from './sales-invoice-history.component';

describe('SalesInvoiceHistoryComponent', () => {
  let component: SalesInvoiceHistoryComponent;
  let fixture: ComponentFixture<SalesInvoiceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
