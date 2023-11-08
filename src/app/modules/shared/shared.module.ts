import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from './components/inputs/text-area-input/text-area-input.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { HeaderSectionComponent } from './components/header-section/header-section.component';

@NgModule({
  declarations: [
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent,
    HeaderSectionComponent,
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
    HeaderSectionComponent,
    SelectInputComponent,
    TextInputComponent,
    TextAreaInputComponent,
    OverlayModule,
    CdkMenuModule
  ]
})
export class SharedModule { }
