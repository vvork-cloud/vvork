import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { RegistraionService } from '../shared/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isCollapsed: boolean = false;
  applicationsFormGroup: FormGroup;
  qualification = [
    { id: 0, value: "Qualification" },
    { id: 1, value: "Matric" },
    { id: 2, value: "Intermediate" },
    { id: 3, value: "Graduation" },
    { id: 4, value: "Masters" }
  ]
  constructor(private formBuilder: FormBuilder, private regService: RegistraionService, private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    // db.list('/registrations').valueChanges().subscribe((data:any) => {
    //   // console.log(data);
    //   this.items = data[0];
    //   console.log(this.items);
    // });
  }

  ngOnInit(): void {
    this.isCollapsed = true;
    this.applicationsFormGroup = this.formBuilder.group({
      $key: ['null'],
      firstName: ['', [Validators.minLength(5)]],
      lastName: ['',],
      email: ['', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      phone: ['', [Validators.required, Validators.pattern(PHONE_REGEX)]],
      address: [''],
      college: [''],
      qualification: [this.qualification[0]],
      shift: this.formBuilder.group({
        value: ['morning']
      }),
      message: ['']
    });

    this.regService.getApplicantsList();
  }

  hideNav(event) {
    event.preventDefault();
    this.isCollapsed = true;
  }


  onSubmit() {
    let applicantData = {
      firstName: this.applicationsFormGroup.get('firstName').value,
      lastName: this.applicationsFormGroup.get('lastName').value,
      email: this.applicationsFormGroup.get('email').value,
      phone: this.applicationsFormGroup.get('phone').value,
      address: this.applicationsFormGroup.get('address').value,
      college: this.applicationsFormGroup.get('college').value,
      qualification: this.applicationsFormGroup.get('qualification').value,
      shift: this.applicationsFormGroup.get('shift').value,
      message: this.applicationsFormGroup.get('message').value
    };
    if (!this.applicationsFormGroup.valid) {
      alert('Invalid form');
    } else if (this.applicationsFormGroup.get('$key').value == 'null') {
      this.toastr.success('Application submitted successfully!', '', { easeTime: 300, timeOut: 3000, positionClass: 'toast-top-center', progressBar: true, progressAnimation: 'increasing' });
      // debugger;
      this.regService.inserApplication(applicantData);
      // debugger;
      this.applicationsFormGroup.reset();
      this.router.navigate(['/index']);
    }
  }

}



// Phone Number Regex
export const PHONE_REGEX = '(^[^0-9]+[9][2][3][0-9]{9}$)|(^[0][3][0-9]{9}$)|(^[0]{2}[9][2][3][0-9]{9}$)';