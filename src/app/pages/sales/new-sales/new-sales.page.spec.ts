import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalesPage } from './new-sales.page';

describe('NewSalesPage', () => {
  let component: NewSalesPage;
  let fixture: ComponentFixture<NewSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
