import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtAngiographyDetailsComponent } from './ct-angiography-details.component';

describe('CtAngiographyDetailsComponent', () => {
  let component: CtAngiographyDetailsComponent;
  let fixture: ComponentFixture<CtAngiographyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtAngiographyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtAngiographyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
