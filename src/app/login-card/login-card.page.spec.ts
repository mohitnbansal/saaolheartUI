import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCardPage } from './login-card.page';

describe('LoginCardPage', () => {
  let component: LoginCardPage;
  let fixture: ComponentFixture<LoginCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
