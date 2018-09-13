import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@vvork.com', [Validators.required]],
      password: ['admin@123', [Validators.required]]
    });
  }

  tryLogin() {
    this.spinner.show();
    let formData = this.loginForm.value;
    this.authService.doLogin(formData)
      .then(res => {
        this.router.navigate(['/dashboard']);
        this.spinner.hide();
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}