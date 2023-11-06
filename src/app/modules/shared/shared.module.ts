import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeadComponent } from './components/table-head/table-head.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from './components/inputs/text-area-input/text-area-input.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    TableHeadComponent,
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    OverlayModule,
    CdkMenuModule
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TableHeadComponent,
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent,
    OverlayModule,
    CdkMenuModule
  ]
})
export class SharedModule { }
