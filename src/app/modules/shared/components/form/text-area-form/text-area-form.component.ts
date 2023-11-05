import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-area-form',
  templateUrl: './text-area-form.component.html',
  styleUrls: ['./text-area-form.component.scss']
})
export class TextAreaFormComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formControlName: string = '';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
