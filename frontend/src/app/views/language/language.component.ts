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
  }

  ngOnInit() {
    this.currentLanguage = this.router.url.split('?')[0].split('/').pop().split('#')[0];
    switch(this.section) {
      case "totori":
        this.languages = environment.totori_languages;
        this.langName = environment.totori_languages[this.currentLanguage];
        break;
      case "escha":
        this.languages = environment.escha_languages;
        this.langName = environment.escha_languages[this.currentLanguage];
        break;
      case "shallie":
        this.languages = environment.shallie_languages;
        this.langName = environment.shallie_languages[this.currentLanguage];
        break;
      case "firis":
        this.languages = environment.firis_languages;
        this.langName = environment.firis_languages[this.currentLanguage];
        break;
      case "ryza2":
        this.languages = environment.ryza2_languages;
        this.langName = environment.ryza2_languages[this.currentLanguage];
        break;
      case "sophie2":
        this.languages = environment.sophie2_languages;
        this.langName = environment.sophie2_languages[this.currentLanguage];
        break;
      case "resleri":
        this.languages = environment.resleri_languages;
        this.langName = environment.resleri_languages[this.currentLanguage];
        break;
      case "second-light":
        this.languages = environment.secondlight_languages;
        this.langName = environment.secondlight_languages[this.currentLanguage];
        break;
      default: // just one lang here so it's okay
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
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([newUrl + '/' + event.value])
      });
  }

}