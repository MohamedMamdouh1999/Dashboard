import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagementRoutingModule } from './users-management-routing.module';
import { OrganizationStructureComponent } from './components/organization-structure/organization-structure.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    OrganizationStructureComponent,
    RoleManagementComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    SharedModule,
    DialogModule
  ]
})
export class UsersManagementModule { }
