import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdateHistoryComponent } from './stock-update-history.component';

describe('StockUpdateHistoryComponent', () => {
  let component: StockUpdateHistoryComponent;
  let fixture: ComponentFixture<StockUpdateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockUpdateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockUpdateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
