import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { SelectFormComponent } from './components/form/select-form/select-form.component';
import { TextFormComponent } from './components/form/text-form/text-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { TextAreaFormComponent } from './components/form/text-area-form/text-area-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableHeadComponent,
    SelectFormComponent,
    TextFormComponent,
    TextAreaFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableHeadComponent,
    SelectFormComponent,
    TextFormComponent,
    TextAreaFormComponent
  ]
})
export class SharedModule { }
