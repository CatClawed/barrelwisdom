import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Effect } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-effect.component.html',
  selector: 'a15-effect',
})
export class A15EffectComponent extends SingleComponent implements OnInit {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'effects');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a15service.getEffect(this.slug, this.language)
      .subscribe({
        next: effect => {
          this.error = ``;
          this.effect = effect;
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 