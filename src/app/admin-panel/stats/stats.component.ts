import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../../shared/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  applicationsCount: number;
  seminarsRegCount: number;

  constructor(private regService: RegistraionService, private router: Router) {
    this.regService.getApplicantsList().subscribe(list => {
      // console.log(list.length);
      this.applicationsCount = list.length;
    });

    this.regService.getSeminarsRegistrations().subscribe(list => {
      this.seminarsRegCount = list.length;
    });
  }

  ngOnInit() {

  }

  naviagteToApplicationList(): void {
    this.router.navigate(['dashboard/applications']);
  }
  naviagteToSeminarsList(): void {
    this.router.navigate(['dashboard/seminars']);
  }
}
