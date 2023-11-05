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
    typeGroup: this.fb.group({
      type: [null, [Validators.required]]
    }),
    nameArGroup: this.fb.group({
      nameAr: [null, [Validators.required, Validators.pattern(/^[أ-ي\s]{2,50}$/)]]
    }),
    nameEnGroup: this.fb.group({
      nameEn: [null, [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,50}$/)]]
    }),
    descriptionGroup: this.fb.group({
      description: [null]
    })
  }, {updateOn: 'change'})
  visible: boolean = false;
  submitForm(form: FormGroup){
    if(form.valid){
      let usersManagement: object = {
        type: form.get('typeGroup')?.get('type')?.value,
        nameAr: form.get('nameArGroup')?.get('nameAr')?.value,
        nameEn: form.get('nameEnGroup')?.get('nameEn')?.value,
        description: form.get('descriptionGroup')?.get('description')?.value
      };
      console.log(usersManagement)
    }

  }
}
