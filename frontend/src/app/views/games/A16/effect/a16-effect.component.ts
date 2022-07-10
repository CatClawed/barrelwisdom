import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-effect.component.html',
  selector: 'a16-effect',
})
export class A16EffectComponent extends SingleComponent implements OnInit {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service);
    this.section = 'effects'
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a16service.getEffect(this.slug, this.language)
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