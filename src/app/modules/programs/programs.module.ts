import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramsFormComponent } from './components/programs-form/programs-form.component';


@NgModule({
  declarations: [
    ProgramsListComponent,
    ProgramsFormComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
