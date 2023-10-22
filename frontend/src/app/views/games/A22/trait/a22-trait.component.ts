import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
  providers: [DestroyService]
})
export class A22TraitComponent extends SingleComponent2 {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto "
    this.a22service.getTrait(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: trait => {
          this.trait = trait;
          this.gameService(this.a22service, 'traits');
          this.genericSEO(this.trait.name, this.trait.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 