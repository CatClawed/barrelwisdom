import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Trait, ItemName } from '@app/interfaces/a22';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { LanguageService } from '@app/services/language.service';

@Component({
  templateUrl: 'language.component.html',
  selector: 'language-settings',
})
export class LanguageComponent implements OnInit {
  @Input()
  section: string = "";

  //@Input()
  currentLanguage: string;

  langName: string = "Eggo";
  languages;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private languageService: LanguageService,
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
  };
  }

  ngOnInit() {
    this.currentLanguage = this.router.url.split('/').pop().split('#')[0];
    if(this.section == "ryza2"){
        this.languages = environment.ryza2_languages;
        this.langName = environment.ryza2_languages[this.currentLanguage];
      }
  }


  changeLanguage(event) {
      let segments = this.router.url.split('/');
      segments.pop();
      let newUrl = "";
        for(let s of segments) {
            if(s) {
                newUrl += '/' + s;
            }
        }
      this.languageService.setLanguage(event.value);
      this.router.navigate([newUrl + '/' + event.value]);
  }

}