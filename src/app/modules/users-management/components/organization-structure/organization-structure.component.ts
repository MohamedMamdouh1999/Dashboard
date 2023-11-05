import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent {
  constructor(private fb:FormBuilder) {}
  usersManagement = this.fb.group({
    type: [null, [Validators.required]],
    nameAr: [null, [Validators.required, Validators.pattern(/^[أ-ي\s]{2,50}$/)]],
    nameEn: [null, [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,50}$/)]],
    description: [null]
  }, {updateOn: 'change'})
  visible: boolean = false;
  submitForm(form: FormGroup){
    console.log(form.valid)
    console.log(form.value)
  }
}
