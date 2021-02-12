import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { AuthenticationService } from "@app/services/authentication.service";
import { User } from "@app/interfaces/user";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { MarkdownService } from 'ngx-markdown';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {ElementRef, ViewChild} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';



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
  user: User;
  sectionIsBlog: boolean = false;
  preview: SafeHtml;
  currentTags: string[] = [];
  tagList: string[] = ["Site News", "Ryza"]
  filteredTags: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  tagControl: FormControl;

  
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private imgValidators = [
    Validators.pattern(environment.imageRegex + '.+\\.(png|jpg)'),
    Validators.maxLength(255),
  ]

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private errorService: ErrorCodeService,
    private authenticationService: AuthenticationService,
    private sanitized: DomSanitizer,
    private markdownService: MarkdownService
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
    this.tagControl = new FormControl();
    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.tagList.slice()));
  }

  ngOnInit() {
    this.pageForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', Validators.required],
      section: ['', Validators.required],
      seoDesc: ['', Validators.required, Validators.maxLength(200)],
      imgURL: ['', this.imgValidators],
      authorLock: [''],
      //tags: this.tagControl
    });

    this.pageForm.get('section').valueChanges
      .subscribe(value => {
        if (value == 'blog') {
          this.pageForm.get('imgURL').setValidators(this.imgValidators.concat(Validators.required));
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = true;
        }
        else {
          this.pageForm.get('imgURL').setValidators(this.imgValidators);
          this.pageForm.get('imgURL').updateValueAndValidity();
          this.sectionIsBlog = false;
        }
      }
      );

      this.pageForm.get('body').valueChanges
        .subscribe(value => {
          this.preview = this.markdownService.compile(<string>value); 
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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    console.log(value.trim());
    console.log(this.currentTags.indexOf(value.trim()));

    if ((value || '').trim()) {
      if(this.currentTags.indexOf(value.trim()) == -1) {
        this.currentTags.push(value.trim());
      }
      console.log(this.currentTags);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tagControl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.currentTags.indexOf(tag);

    if (index >= 0) {
      this.currentTags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    if(this.currentTags.indexOf(event.option.viewValue) == -1) {
      this.currentTags.push(event.option.viewValue);
    }
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagList.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}