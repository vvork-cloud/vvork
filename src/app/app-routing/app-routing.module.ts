import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ContactComponent } from '../contact/contact.component';
import { SeminarComponent } from '../seminar/seminar.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'apply', component: RegistrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'seminar', component: SeminarComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
