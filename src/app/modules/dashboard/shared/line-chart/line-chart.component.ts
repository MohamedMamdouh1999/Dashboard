import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  constructor(private translate: TranslateService) {
    this.translate.currentLang === 'ar' ? this.isRtl = true : this.isRtl = false;
    this.isRtl ? this.option = ['7 أيام', '30 يوم', '3 أشهر', '12 شهر'] : this.option = ['7 Days', '30 Days', '3 Months', '12 Months'];
  }
  isRtl: boolean;
  option: string[] = []
  handleIndexChange(e: number): void {
    console.log(e);
  }
  data: any;
  options: any;
  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { data: [65, 59, 80, 81, 56, 55, 40], fill: false, borderColor: '#F79009', backgroundColor: '#F79009', tension: 0.4 },
        { data: [28, 48, 40, 19, 86, 27, 90], fill: false, borderColor: '#008755', backgroundColor: '#008755', tension: 0.4 }
      ]
    };
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {display:false}
      }
    };
  }
}
