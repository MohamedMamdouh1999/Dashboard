import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCoursesComponent } from './training-courses.component';

describe('TrainingCoursesComponent', () => {
  let component: TrainingCoursesComponent;
  let fixture: ComponentFixture<TrainingCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingCoursesComponent]
    });
    fixture = TestBed.createComponent(TrainingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
