import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStockPage } from './new-stock.page';

describe('NewStockPage', () => {
  let component: NewStockPage;
  let fixture: ComponentFixture<NewStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
