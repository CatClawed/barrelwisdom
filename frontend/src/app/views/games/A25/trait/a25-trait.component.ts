import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-trait.component.html',
  selector: 'a25-trait',
  providers: [DestroyService]
})
export class A25TraitComponent extends SingleComponent {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a25service.getTrait(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: trait => {
          this.trait = trait;
          this.gameService(this.a25service, 'traits');
          if (this.language == "en") {
            this.genericSEO(this.trait.name_en, this.trait.desc.replace('{0}', this.trait.val[0] + ' ~ ' + this.trait.val[4]));
          }
          else {
            this.genericSEO(this.trait.name_ja, this.trait.desc.replace('{0}', this.trait.val[0] + ' ~ ' + this.trait.val[4]));
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 