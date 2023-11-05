import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formGroupName!: string;
  @Input() formName!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() id!: string;
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
