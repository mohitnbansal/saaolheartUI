import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuantityPage } from './stock-quantity.page';

describe('StockQuantityPage', () => {
  let component: StockQuantityPage;
  let fixture: ComponentFixture<StockQuantityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuantityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuantityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
