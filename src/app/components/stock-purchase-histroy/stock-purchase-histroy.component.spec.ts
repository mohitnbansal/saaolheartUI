import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPurchaseHistroyComponent } from './stock-purchase-histroy.component';

describe('StockPurchaseHistroyComponent', () => {
  let component: StockPurchaseHistroyComponent;
  let fixture: ComponentFixture<StockPurchaseHistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPurchaseHistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPurchaseHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
