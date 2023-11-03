import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-month',
  templateUrl: './metric-month.component.html',
  styleUrls: ['./metric-month.component.scss']
})
export class MetricMonthComponent {
  @Input() trainees: boolean = false;
  @Input() groups: boolean = false;
  number: number = 70
}
