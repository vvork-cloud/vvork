import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegistraionService } from '../shared/registration.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  public isCollapsed = true;
  // public progressBar: number;

  public events = [''];

  constructor(private spinner: NgxSpinnerService, private regService: RegistraionService) {
    AOS.init();
    // this.spinner.show();
  }

  ngOnInit() {
    this.regService.getEventsList().subscribe(list => {
      this.events = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    // All the code related to setting the course roadmap dynamic will go here
    // this.regService.getDynamicData().subscribe(log => {
    //   console.log(log);
    // } )
  }

  hideNav(event) {
    event.preventDefault();
    this.isCollapsed = true;
  }

  ngAfterViewInit() {
    // this.spinner.hide();
  }
}