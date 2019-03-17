import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSalesPage } from './search-sales.page';

describe('SearchSalesPage', () => {
  let component: SearchSalesPage;
  let fixture: ComponentFixture<SearchSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
