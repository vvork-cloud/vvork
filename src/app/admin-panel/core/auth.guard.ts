import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

    constructor(public afAuth: AngularFireAuth, public authService: AuthService, private router: Router) {
    }

    canActivateChild() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/admin-panel']);
        return false;
    }
}
