import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formGroupName!: string
  @Input() formName!: string
  @Input() label!: string
  @Input() type!: string
  @Input() name!: string
  @Input() id!: string
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
