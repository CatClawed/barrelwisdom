import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Effect } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-effect.component.html',
  selector: 'a18-effect',
})
export class A18EffectComponent extends SingleComponent implements OnInit {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,
  ) {
    super(route, seoService);
    this.gameService(this.a18service, 'effects');
  }
  
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto "
    this.a18service.getEffect(this.slug, this.language)
      .subscribe({
        next: effect => {
          this.error =``;
          this.effect = effect;
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 