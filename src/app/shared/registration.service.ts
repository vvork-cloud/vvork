import { Injectable, OnInit } from  '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database'

@Injectable()
export class RegistraionService implements OnInit {

      usersList: AngularFireList<any>;
      messagesList: AngularFireList<any>;
      seminarsList: AngularFireList<any>;
      seminarsRegistrations: AngularFireList<any>;

      constructor(private db: AngularFireDatabase) {

      }

      ngOnInit() {

      }

      getData() {
            this.usersList = this.db.list('registrations');
            // console.log(this.usersList);
            return this.usersList;
      }

      insertEmployee(user: IRegistration) {
            this.usersList.push(user);
      }


      getMessages() {
            this.messagesList = this.db.list('messages');
            // console.log(this.messagesList);
            return this.messagesList
      }

      insertMessage(message: IContact){
            this.messagesList.push(message);
      }

      getSeminars() {
            this.seminarsList = this.db.list('seminar-date');
            return this.seminarsList;
      }

      getSeminarsRegistrations() {
            this.seminarsRegistrations = this.db.list('seminar-registrations');
            return this.seminarsRegistrations;
      }

      insertSeminarRegistration(regData: ISeminar){
            this.seminarsRegistrations.push(regData);
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