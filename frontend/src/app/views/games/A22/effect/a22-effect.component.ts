import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { EffectFull } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
})
export class A22EffectComponent extends SingleComponent implements OnInit {
  effect: EffectFull;

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a22service);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a22service.getEffect(this.slug, this.language)
      .subscribe({
        next: effect => {
          if (effect.efftype == "Hidden" || effect.efftype == "unused") {
            this.error = `404`;
          }
          else {
            this.error = ``;
            this.effect = effect;
            this.seoURL = `${this.gameURL}/effects/${this.effect.slug}/${this.language}`;
            this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
            this.seoDesc = this.effect.desc ? `${this.effect.desc}` : `EV Effect in ${this.gameTitle}.`
            this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 