import { Injectable } from "@angular/core";
import 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";


@Injectable()
export class AuthService {

    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;

    constructor(private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;

        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    // console.log(this.userDetails);
                } else {
                    this.userDetails = null;
                }
            }
        );
    }


    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err))
        })
    }

    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                this.afAuth.auth.signOut()
                resolve();
            }
            else {
                reject();
            }
        });
    }

    isLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }
}