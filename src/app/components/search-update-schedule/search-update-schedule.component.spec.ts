import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUpdateScheduleComponent } from './search-update-schedule.component';

describe('SearchUpdateScheduleComponent', () => {
  let component: SearchUpdateScheduleComponent;
  let fixture: ComponentFixture<SearchUpdateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUpdateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUpdateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
