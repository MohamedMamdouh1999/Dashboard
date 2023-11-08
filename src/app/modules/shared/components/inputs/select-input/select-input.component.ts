import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectInputComponent,
    multi: true
  }]
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() errors!: ValidationErrors | null | undefined;
  @Input() submitted!: boolean;
  @Input() required!: boolean;
  @Input() touched!: boolean | undefined;
  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() id!: string;
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
