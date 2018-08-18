import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistraionService } from './shared/registration.service';
import { IndexComponent } from './index/index.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './features/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SeminarComponent } from './seminar/seminar.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    IndexComponent,
    ContactComponent,
    SeminarComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ScrollToModule.forRoot(),
    NgbModule.forRoot(),
    NgbCollapseModule.forRoot(),
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    RegistraionService,
    // AuthService,
    // AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
