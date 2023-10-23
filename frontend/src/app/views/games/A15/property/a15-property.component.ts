import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Property } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-property.component.html',
  selector: 'a15-property',
  providers: [DestroyService]
})
export class A15PropertyComponent extends SingleComponent {
  property: Property;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a15service.getProperty(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: property => {
          this.error = ``;
          this.property = property;
          this.gameService(this.a15service, 'properties');
          this.genericSEO(this.property.name, this.property.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 