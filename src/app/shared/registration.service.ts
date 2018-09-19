import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class RegistraionService implements OnInit {

      usersList: AngularFireList<any>;
      eventsList: AngularFireList<any>;
      messagesList: AngularFireList<any>;
      seminarsList: AngularFireList<any>;
      seminarsRegistrations: AngularFireList<any>;

      constructor(private db: AngularFireDatabase) {

      }

      ngOnInit() {

      }

      /*==========================================================
            DASHBOARD: EVENTS - SEMINARS LIST TO DISPLAY ON INDEX
      ============================================================*/

      getEventsList() {
            this.eventsList = this.db.list('events-register');
            return this.eventsList.snapshotChanges();
      }

      //Create Events
      createEvent(event: IEvent) {
            this.eventsList.push(event);
      }

      deleteEvent($key: string) {
            this.eventsList.remove($key);
      }

      /*=======================================
            DASHBOARD: APPLICATIONS
      =========================================*/

      //Get Students Applications List
      getApplicantsList() {
            this.usersList = this.db.list('registrations');
            return this.usersList.snapshotChanges();
      }

      getApplicantsListForExport() {
            this.usersList = this.db.list('registrations');
            return this.usersList;
      }

      //Insert to Students Applications List
      inserApplication(user: IRegistration) {
            this.usersList.push(user);
      }
      //Deleting single application
      deleteItemFromApplications($key: string) {
            this.usersList.remove($key);
      }

      /*=======================================
            DASHBOARD: CONTACTS
      =========================================*/

      getMessages() {
            this.messagesList = this.db.list('messages');
            // console.log(this.messagesList);
            return this.messagesList
      }

      insertMessage(message: IContact) {
            this.messagesList.push(message);
      }

      getSeminars() {
            this.seminarsList = this.db.list('seminar-date');
            return this.seminarsList;
      }

      /*=======================================
            DASHBOARD: SEMINARS
      =========================================*/

      // Get Seminar Registrations List
      getSeminarsRegistrations() {
            this.seminarsRegistrations = this.db.list('seminar-registrations');
            return this.seminarsRegistrations.snapshotChanges();
      }
      
      getSeminarsRegistrationsForExport() {
            this.seminarsRegistrations = this.db.list('seminar-registrations');
            return this.seminarsRegistrations.valueChanges();      
      }
      
      // Insert to Seminar Register
      insertSeminarRegistration(regData: ISeminar) {
            this.seminarsRegistrations.push(regData);
      }
      // Delete a record from Seminars List
      deleteItemFromSeminars($key: string) {
            this.seminarsRegistrations.remove($key);
      }

}

export interface IRegistration {
      firstName: String;
      lastName: String;
      email: String;
      phone: String;
      address: String;
      college: String;
      qualification: String;
      shift: String;
      message: String;
}

export interface IEvent {
      startDate: string;
      endDate: string;
      stackTaught: string;
}


export interface IContact {
      name: string;
      email: string;
      phone: number;
      message: string;
}



export interface ISeminar {
      name: string;
      email: string;
      phone: number;
      qualification: string;
      seminarDate: string;
}