import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-trait.component.html',
  selector: 'a18-trait',
  providers: [DestroyService]
})
export class A18TraitComponent extends SingleComponent {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a18service.getTrait(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: trait => {
          this.error = ``;
          this.trait = trait;
          this.gameService(this.a18service, 'traits');
          this.genericSEO(this.trait.name, this.trait.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 