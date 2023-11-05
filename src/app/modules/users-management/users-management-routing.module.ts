import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationStructureComponent } from './components/organization-structure/organization-structure.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'organization', component: OrganizationStructureComponent },
  { path: 'organization/:id', component: OrganizationStructureComponent },
  { path: 'role', component: RoleManagementComponent },
  { path: 'role/:id', component: RoleManagementComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
