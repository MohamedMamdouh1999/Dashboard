import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from './components/inputs/text-area-input/text-area-input.component';

@NgModule({
  declarations: [
    TableHeadComponent,
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    ReactiveFormsModule,
    TableHeadComponent,
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent
  ]
})
export class SharedModule { }
