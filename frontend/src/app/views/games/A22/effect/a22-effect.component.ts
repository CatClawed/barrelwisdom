import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EffectFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
})
export class A22EffectComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
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
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a22service: A22Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.effect != null) {
      this.slug = this.route.snapshot.params.effect;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a22service.getEffect(this.slug, this.language)
    .subscribe({next: effect => {
      if(effect.efftype == "Hidden" || effect.efftype == "unused") {
          this.error =`404`;
      }
      else {
          this.error =``;
          this.effect = effect;
          this.gameTitle = this.a22service.gameTitle[this.language];
          this.gameURL = this.a22service.gameURL;
          this.imgURL = this.a22service.imgURL;

          this.seoURL = `${this.gameURL}/effects/${this.effect.slug}/${this.language}`;
          this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
          this.seoDesc = this.effect.desc ? `${this.effect.desc}` : `EV Effect in ${this.gameTitle}.`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      }
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 