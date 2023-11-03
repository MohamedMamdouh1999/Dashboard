import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-courses',
  templateUrl: './metric-courses.component.html',
  styleUrls: ['./metric-courses.component.scss']
})
export class MetricCoursesComponent {
  @Input() effectiveCourses: boolean = false;
  @Input() archivedCourses: boolean = false;
  @Input() totalEnrollment: boolean = false;
  @Input() completeCourses: boolean = false;
  @Input() rateCompleteCourses: boolean = false;
  number: number = 50
}
