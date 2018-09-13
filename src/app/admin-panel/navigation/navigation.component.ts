import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private isCollapsed: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isCollapsed = true;
  }


  hideNav(event) {
    this.isCollapsed = true;
  }

  showNav(e) {
    console.log(e);
    this.isCollapsed;
  }

  logOut() {
    this.authService.doLogout();
    this.router.navigate(['/admin-panel'])
  }

  callAll(e) {
    this.hideNav(e);
    this.logOut();
  }

}
