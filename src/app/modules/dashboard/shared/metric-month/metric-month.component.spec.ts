import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricMonthComponent } from './metric-month.component';

describe('MetricMonthComponent', () => {
  let component: MetricMonthComponent;
  let fixture: ComponentFixture<MetricMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricMonthComponent]
    });
    fixture = TestBed.createComponent(MetricMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
