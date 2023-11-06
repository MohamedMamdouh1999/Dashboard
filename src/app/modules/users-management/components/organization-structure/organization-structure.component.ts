import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss']
})
export class OrganizationStructureComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private fb:FormBuilder) {}
  usersManagement = this.fb.group({
    type: [null, [Validators.required]],
    nameAr: [null, [Validators.required, Validators.pattern(/^[أ-ي\s]{2,50}$/)]],
    nameEn: [null, [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,50}$/)]],
    description: [null]
  }, {updateOn: 'change'})
  visible: boolean = false;
  id!: number;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(paramMap => this.id = Number(paramMap.get('id')))
  }
  get nameAr(){
    return this.usersManagement.get('nameAr')
  }
  get nameEn(){
    return this.usersManagement.get('nameEn')
  }
  submitForm(form: FormGroup){
    if(form.valid) console.log(form.value);
  }
}
