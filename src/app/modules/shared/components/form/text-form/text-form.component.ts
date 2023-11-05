import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss']
})
export class TextFormComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formControlName: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
