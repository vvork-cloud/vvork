import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../../shared/registration.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  public data = [''];

  public printData = [];

  constructor(private regService: RegistraionService) { }

  ngOnInit() {
    this.regService.getApplicantsList().subscribe(list => {
      this.data = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });

    this.regService.getApplicantsListForExport().valueChanges().subscribe(listArray => {
      // console.log(listArray);
      this.printData = listArray;
      })

    
  }


  deleteRecord($key): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.regService.deleteItemFromApplications($key)
    }
  }

  exportCSV() {
    // console.log('CLICKED!');
    // debugger;
    var exportArray = [];
    for (let i = 0; i < this.printData.length; i++) {
      var object = {
        name: this.printData[i].firstName + ' ' + this.printData[i].lastName,
        phone: this.printData[i].phone,
        email: this.printData[i].email,
        address: this.printData[i].address,
        college: this.printData[i].college,
        qualification: this.printData[i].qualification.value,
        shift: this.printData[i].shift.value,
        message: this.printData[i].message
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
      headers: ["Name", "Phone", "Email", "Address", "College", "Qualification", "Shift", "Message"]
    };
    new Angular5Csv(exportArray, 'Online Applications', options);
  }

}
