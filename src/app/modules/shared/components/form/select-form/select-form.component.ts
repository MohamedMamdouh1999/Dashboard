import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent {
  constructor(private rootFormGroup: FormGroupDirective) {}
  @Input() formControlName: string = '';
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  items = ['cayyy', 'kkkk','kkkk']
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
