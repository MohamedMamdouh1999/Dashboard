import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { TrainingCoursesComponent } from './components/training-courses/training-courses.component';
import { AchievementsChartComponent } from './shared/achievements-chart/achievements-chart.component';
import { CounterDetailsComponent } from './shared/counter-details/counter-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { MetricCoursesComponent } from './shared/metric-courses/metric-courses.component';
import { MetricMonthComponent } from './shared/metric-month/metric-month.component';
import { TotalChartComponent } from './shared/total-chart/total-chart.component';
import { TableComponent } from './shared/table/table.component';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    GroupsComponent,
    TraineesComponent,
    TrainingCoursesComponent,
    AchievementsChartComponent,
    CounterDetailsComponent,
    HeaderComponent,
    MetricCoursesComponent,
    MetricMonthComponent,
    TotalChartComponent,
    TableComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NzDatePickerModule,
    NzSegmentedModule,
    TabViewModule,
    ChartModule,
    FormsModule
  ]
})
export class DashboardModule { }
