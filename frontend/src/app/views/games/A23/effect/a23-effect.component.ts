import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Effect } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a23-effect.component.html',
  selector: 'a23-effect',
})
export class A23EffectComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  effect: Effect;
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
    private a23service: A23Service,
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
    this.a23service.getEffect(this.slug, this.language)
    .subscribe({next: effect => {
        this.error =``;
        this.effect = effect;
        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;
        this.seoURL = `${this.gameURL}/effects/${this.effect.slug}/${this.language}`;
        this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.effect.desc}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 