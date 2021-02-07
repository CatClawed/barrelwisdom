import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ErrorCodeService } from "../../services/errorcode.service";


@Component({
  templateUrl: 'create.component.html'
})


export class CreateComponent {
  error: boolean = false;
  errorCode: string;
  errorVars: any[];

  pageForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private errorService: ErrorCodeService
  ) {  }

  ngOnInit() {
    this.pageForm = this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required], 
        section: ['', Validators.required],
        seoDesc: ['', Validators.required],
        imgURL: ['', Validators.required],
        authorLock: ['', Validators.required],
    });
}

get f() { return this.pageForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.pageForm.invalid) {
      return;
  }

  this.loading = true;

    console.log(this.f);
    return;
  }
}