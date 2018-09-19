import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../../shared/registration.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';


@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.scss']
})
export class SeminarsComponent implements OnInit {

  public data;
  public printData = [];

  constructor(private regService: RegistraionService) { }

  ngOnInit() {
    this.regService.getSeminarsRegistrations().subscribe(list => {
      this.data = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });

    this.regService.getSeminarsRegistrationsForExport().subscribe(list => {
      this.printData = list;
      console.log(list)
    })
  }

  deleteRecord($key): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.regService.deleteItemFromSeminars($key)
    }
  }


  exportCSV() {
    // console.log('CLICKED!');
    // debugger;
    var exportArray = [];
    for (let i = 0; i < this.printData.length; i++) {
      var object = {
        name: this.printData[i].name,
        phone: this.printData[i].phone,
        email: this.printData[i].email,
        qualification: this.printData[i].qualification.value,
        seminarDate: this.printData[i].seminarDate.date,
        seminarTime: this.printData[i].seminarTime.value
      }
      exportArray.push(object);
    }

    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: false,
      noDownload: false,
      headers: ["Name", "Phone", "Email", "Qualification", "Seminar Date", "Seminar Time"]
    };
    new Angular5Csv(exportArray, 'Seminar Registrations', options);
  }
}
