import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../features/shared.module';
import { DashboardModule } from './dashboard.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  { path: 'admin-panel', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    LoginComponent,
    AdminPanelComponent
  ]
})
export class AdminModule { }
