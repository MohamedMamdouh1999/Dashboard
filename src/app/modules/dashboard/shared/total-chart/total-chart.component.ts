import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-chart',
  templateUrl: './total-chart.component.html',
  styleUrls: ['./total-chart.component.scss']
})
export class TotalChartComponent implements OnInit {
  @Input() title!: string;
  @Input() courses!: boolean;
  @Input() hours!: boolean;
  @Input() trainees!: boolean;
  @Input() overData!: number[];
  data: any;
  options: any;
  ngOnInit() {
    this.data = {
      datasets: [{
        data: this.overData,
        backgroundColor: ['#028755', '#f79009', '#0ca5ec', '#5C82F2'],
        hoverBackgroundColor: ['#028755', '#f79009', '#0ca5ec', '#5C82F2']
      }]
    };
    this.options = {cutout: '60%'};
  }
}
