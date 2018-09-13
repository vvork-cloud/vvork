import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../../shared/registration.service';

@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.scss']
})
export class SeminarsComponent implements OnInit {

  public data;
  constructor(private regService: RegistraionService) { }

  ngOnInit() {
    this.regService.getSeminarsRegistrations().subscribe(list => {
      this.data = list.map(item => {
        console.log(item.payload);
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  deleteRecord($key): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.regService.deleteItemFromSeminars($key)
    }
  }

}
