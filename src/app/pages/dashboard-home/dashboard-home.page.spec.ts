import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomePage } from './dashboard-home.page';

describe('DashboardHomePage', () => {
  let component: DashboardHomePage;
  let fixture: ComponentFixture<DashboardHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
