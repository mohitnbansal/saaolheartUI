import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlanDetailComponent } from './treatment-plan-detail.component';

describe('TreatmentPlanDetailComponent', () => {
  let component: TreatmentPlanDetailComponent;
  let fixture: ComponentFixture<TreatmentPlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentPlanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
