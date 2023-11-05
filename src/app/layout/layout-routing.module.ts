import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./../modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'users-management', loadChildren: () => import('./../modules/users-management/users-management.module').then(m => m.UsersManagementModule) },
    { path: 'programs', loadChildren: () => import('./../modules/programs/programs.module').then(m => m.ProgramsModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
