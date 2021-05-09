import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
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