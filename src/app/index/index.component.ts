import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterContentInit {
  
  public isCollapsed = true;
  
  
  constructor(private spinner: NgxSpinnerService) { 
    AOS.init();
  }

  ngOnInit() {
    this.spinner.show();
  }


  ngAfterContentInit() {
    this.spinner.hide();
  }
}
