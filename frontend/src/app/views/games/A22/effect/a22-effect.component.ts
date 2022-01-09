import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EffectFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
})
export class A22EffectComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  effect: EffectFull;
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    public historyService: HistoryService,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService) {
      if(this.route.snapshot.params.effect != null) {
      this.slugname = this.route.snapshot.params.effect;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a22service.getEffect(this.slugname, this.language)
    .subscribe(effect => {
      if(effect.efftype == "Hidden" || effect.efftype == "unused") {
          this.error = true;
          this.errorCode = "404";
          this.errorVars = this.errorService.getCodes(this.errorCode);
      }
      else {
          this.error = false;
          this.effect = effect;
          this.gameTitle = this.a22service.gameTitle;
          this.gameURL = this.a22service.gameURL;
          this.imgURL = this.a22service.imgURL;

          this.seoURL = `${this.gameURL}/effects/${this.effect.slugname}/${this.language}`;
          this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
          this.seoDesc = this.effect.description ? `${this.effect.description}` : `EV Effect in ${this.gameTitle}.`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      }
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 