import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Effect } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-effect.component.html',
  selector: 'a23-effect',
})
export class A23EffectComponent extends SingleComponent implements OnInit {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,
  ) {
    super(route, seoService);
    this.gameService(this.a23service);
  }
  
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto "
    this.a23service.getEffect(this.slug, this.language)
      .subscribe({
        next: effect => {
          this.error =``;
          this.effect = effect;
          this.seoURL = `${this.gameURL}/effects/${this.effect.slug}/${this.language}`;
          this.seoTitle = `${this.effect.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.effect.desc}`;
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 