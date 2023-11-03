import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainingCoursesComponent } from './components/training-courses/training-courses.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'training-courses', component: TrainingCoursesComponent },
  { path: 'trainees', component: TraineesComponent },
  { path: 'groups', component: GroupsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
