import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextInputComponent,
    multi: true
  }]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() errors!: ValidationErrors | null | undefined;
  @Input() touched!: boolean | undefined;
  @Input() submitted!: boolean;
  @Input() required!: boolean;
  @Input() patternEn!: boolean;
  @Input() patternAr!: boolean;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() id!: string;
  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
