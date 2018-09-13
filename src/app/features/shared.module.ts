import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { DataTableModule } from "angular-6-datatable";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    // DataTableModule
  ],
  declarations: [

  ],
  exports: [
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }