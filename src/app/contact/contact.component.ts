import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHONE_REGEX } from '../registration/registration.component';
import { RegistraionService } from '../shared/registration.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private regService: RegistraionService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.contactForm = this.formbuilder.group({
      name: [''],
      email: [''],
      phone: ['', [Validators.required, Validators.pattern(PHONE_REGEX)]],
      message: [''],
    });

    this.regService.getMessages().valueChanges().subscribe();
    // this.regService.getMessages().valueChanges().subscribe(data => { console.log(data) });
  }

  onSubmit() {
    let message = this.contactForm.value;
    if (!this.contactForm.valid) {
      alert('Invalid form');
    } else {
      this.toastr.success('We will contact to you shortly.', 'Thank you!', { easeTime: 300, timeOut: 3000, positionClass: 'toast-top-center', progressBar: true, progressAnimation: 'increasing' });
      // debugger;
      this.regService.insertMessage(message);
      // debugger;
      this.contactForm.reset();
      this.router.navigate(['/index']);
    }
  }
  
}