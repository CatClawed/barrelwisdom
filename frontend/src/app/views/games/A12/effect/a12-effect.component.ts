import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Effect } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a12-effect.component.html',
  selector: 'a12-effect',
})
export class A12EffectComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  errorVars: any[];
  errorMsg: string;
  effect: Effect;
  colset: string;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

constructor(
    private route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
      if(this.route.snapshot.params.effect != null) {
      this.slugname = this.route.snapshot.params.effect;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a12service.getEffect(this.slugname, this.language)
    .subscribe({next: effect => {
      this.error =``;
      this.effect = effect;
      this.gameTitle = this.a12service.gameTitle[this.language];
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/effects/${this.effect.slugname}/${this.language}`;
      this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
      this.seoDesc = `${this.effect.desc}`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 