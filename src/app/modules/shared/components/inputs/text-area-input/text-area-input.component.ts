import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextAreaInputComponent,
    multi: true
  }]
})
export class TextAreaInputComponent implements ControlValueAccessor {
  @Input() label!: string
  @Input() name!: string
  @Input() id!: string
  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
