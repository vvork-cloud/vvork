import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHONE_REGEX } from '../registration/registration.component';
import { RegistraionService } from '../shared/registration.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.scss']
})
export class SeminarComponent implements OnInit {

  contactForm: FormGroup;
  isCollapsed: boolean = false;
  seminarDates = [
    {id: 0, date: "Choose Seminar Date"},
    {id: 1, date: "10/09/18"},
    {id: 2, date: "12/11/18"},
    {id: 3, date: "07/01/19"},
    {id: 4, date: "04/03/19"},
    {id: 5, date: "06/05/19"}
  ];

  qualification = [
    {id: 0, value: "Qualification"},
    {id: 1, value: "Matric"},
    {id: 2, value: "Intermediate"},
    {id: 3, value: "Graduation"},
    {id: 4, value: "Masters"}
  ]

  seminarTimes = [
    { id: 0, value: "Choose Seminar Time" },
    { id: 1, value: "10AM TO 12PM" },
    { id: 2, value: "2PM TO 4PM" },
    { id: 3, value: "6PM TO 8PM" }
  ]


  constructor(private formbuilder: FormBuilder, private regService: RegistraionService, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit() {
    this.isCollapsed = true;
    this.contactForm = this.formbuilder.group({
      $key: ['null'],
      name: [''],
      email: [''],
      phone: ['03999999999', [Validators.required, Validators.pattern(PHONE_REGEX)]],
      qualification: [this.qualification[0]],
      seminarDate: [this.seminarDates[0]],
      seminarTime: [this.seminarTimes[0]]
    });
    this.regService.getSeminarsRegistrations();

  }

  hideNav(event){
    event.preventDefault();
    this.isCollapsed = true;
  }

  onSubmit() {
    let data =
    {
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      phone: this.contactForm.get('phone').value,
      qualification: this.contactForm.get('qualification').value,
      seminarDate: this.contactForm.get('seminarDate').value,
      seminarTime: this.contactForm.get('seminarTime').value
    }
    if (!this.contactForm.valid) {
      alert('Please fill the form corrent.');
    }
    else if (this.contactForm.get('$key').value == 'null')
    {
      this.toastr.success('We will contact to you shortly.', 'Thank you!', { easeTime: 300, timeOut: 3000, positionClass: 'toast-top-center', progressBar: true, progressAnimation: 'increasing' });
      this.regService.insertSeminarRegistration(data);
      this.contactForm.reset();
      this.router.navigate(['/index']);
    }
  }
}