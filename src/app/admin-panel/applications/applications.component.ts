import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../../shared/registration.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  public data = [''];

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
  }


  deleteRecord($key): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.regService.deleteItemFromApplications($key)
    }
  }

}
