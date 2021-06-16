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
    if(this.section == "totori"){
      this.languages = environment.totori_languages;
      this.langName = environment.totori_languages[this.currentLanguage];
    }
    if(this.section == "escha"){
      this.languages = environment.escha_languages;
      this.langName = environment.escha_languages[this.currentLanguage];
    }
    if(this.section == "shallie"){
      this.languages = environment.shallie_languages;
      this.langName = environment.shallie_languages[this.currentLanguage];
    }
    if(this.section == "ryza2"){
        this.languages = environment.ryza2_languages;
        this.langName = environment.ryza2_languages[this.currentLanguage];
    }
    if(this.section == "bluereflection"){
      this.languages = environment.bluereflection_languages;
      this.langName = environment.bluereflection_languages[this.currentLanguage];
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