import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-courses',
  templateUrl: './metric-courses.component.html',
  styleUrls: ['./metric-courses.component.scss']
})
export class MetricCoursesComponent {
  @Input() coursesAnalysis!: boolean;
  @Input() lastMonth!: boolean;
  @Input() title!: string;
  number: number = 70;
}
