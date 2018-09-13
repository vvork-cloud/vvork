import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RegistraionService } from '../../shared/registration.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventsFormGroup: FormGroup;
  public dataList = [''];

  constructor(private formBuilder: FormBuilder, private regService: RegistraionService, private toastr : ToastrService) { }

  ngOnInit() {
    this.eventsFormGroup = this.formBuilder.group({
      $key: ['null'],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      stackTaught: ['Full-Stack Development']
    });

    this.regService.getEventsList().subscribe(list => {
      this.dataList = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  onCreateEvent() {
    let sdate = new DatePipe('en-Us').transform(this.eventsFormGroup.get('startDate').value, 'dd MMM yyyy');
    let edate = new DatePipe('en-Us').transform(this.eventsFormGroup.get('endDate').value, 'dd MMM yyyy');

    let eventObject = {
      startDate: sdate,
      endDate: edate,
      stackTaught: this.eventsFormGroup.get('stackTaught').value
    }

    if(this.eventsFormGroup.get('$key').value == 'null') {
      this.toastr.success('Event added successfully!', '', { easeTime: 300, timeOut: 3000, positionClass: 'toast-top-center', progressBar: true, progressAnimation: 'increasing' });
      this.regService.createEvent(eventObject);
      this.eventsFormGroup.get('startDate').reset();
      this.eventsFormGroup.get('endDate').reset();
    }
  }

  deleteRecord ($key) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.regService.deleteEvent($key);
    }
  }
}