import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricCoursesComponent } from './metric-courses.component';

describe('MetricCoursesComponent', () => {
  let component: MetricCoursesComponent;
  let fixture: ComponentFixture<MetricCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricCoursesComponent]
    });
    fixture = TestBed.createComponent(MetricCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
