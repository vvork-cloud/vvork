import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';


import { DataTableModule } from "angular-6-datatable";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../features/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './core/auth.guard';

const dashRoutes: Routes = [
  {component: DashboardComponent, path: 'dashboard', canActivateChild: [AuthGuard] , children: [
    { path: '', redirectTo: 'statistics', pathMatch: 'full' },
    { component: StatsComponent, path: 'statistics' },
    { component: ApplicationsComponent, path: 'applications' },
    { component: SeminarsComponent, path: 'seminars' },
    { component: EventsComponent, path: 'events' }
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(dashRoutes),
    DataTableModule
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent, 
    ApplicationsComponent, 
    StatsComponent,
    SeminarsComponent,
    EventsComponent,
    NavigationComponent,
    MainComponent
  ],
  exports: [
  ]
})
export class DashboardModule { }
