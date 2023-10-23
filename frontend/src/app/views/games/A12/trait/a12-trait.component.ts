import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-trait.component.html',
  selector: 'a12-trait',
  providers: [DestroyService]
})
export class A12TraitComponent extends SingleComponent {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    
    this.a12service.getTrait(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: trait => {
          this.error = ``;
          this.trait = trait;
          this.gameService(this.a12service, 'traits');
          this.genericSEO(this.trait.name, this.trait.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 