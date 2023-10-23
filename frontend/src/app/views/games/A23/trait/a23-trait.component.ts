import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-trait.component.html',
  selector: 'a23-trait',
  providers: [DestroyService]
})
export class A23TraitComponent extends SingleComponent {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    
    this.a23service.getTrait(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: trait => {
          this.error = ``;
          this.trait = trait;
          this.gameService(this.a23service, 'traits');
          this.genericSEO(this.trait.name, this.trait.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 