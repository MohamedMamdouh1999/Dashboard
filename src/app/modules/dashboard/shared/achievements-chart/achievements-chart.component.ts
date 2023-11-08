import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievements-chart',
  templateUrl: './achievements-chart.component.html',
  styleUrls: ['./achievements-chart.component.scss']
})
export class AchievementsChartComponent {
  @Input() overData!: number[];
  @Input() title!: string;
  data: any;
  options: any;
  ngOnInit() {
    this.data = {
      datasets: [{
        data: this.overData,
        backgroundColor: ['rgb(2, 135, 85)', 'rgb(208, 213, 221)'],
        hoverBackgroundColor: ['rgb(2, 135, 85)', 'rgb(208, 213, 221)']
      }]
    };
    this.options = {cutout: '60%'};
  }
}
