import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolpopComponent } from './toolpop.component';

describe('ToolpopComponent', () => {
  let component: ToolpopComponent;
  let fixture: ComponentFixture<ToolpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolpopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
