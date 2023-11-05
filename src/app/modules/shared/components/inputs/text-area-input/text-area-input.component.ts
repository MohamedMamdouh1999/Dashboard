import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formGroupName!: string
  @Input() formName!: string
  @Input() label!: string
  @Input() name!: string
  @Input() id!: string
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
