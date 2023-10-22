import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Property } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-property.component.html',
  selector: 'a16-property',
  providers: [DestroyService]
})
export class A16PropertyComponent extends SingleComponent2 {
  property: Property;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a16service.getProperty(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: property => {
          this.property = property;
          this.gameService(this.a16service, 'properties');
          this.genericSEO(this.property.name, this.property.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 