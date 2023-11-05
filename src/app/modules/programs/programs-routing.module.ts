import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramsFormComponent } from './components/programs-form/programs-form.component';

const routes: Routes = [
  { path: '', component: ProgramsListComponent },
  { path: 'create', component: ProgramsFormComponent },
  { path: 'edit/:id', component: ProgramsFormComponent },
  { path: 'view/:id', component: ProgramsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
