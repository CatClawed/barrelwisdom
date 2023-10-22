import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { CategoryData } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-category.component.html',
})
export class A15CategoryComponent extends SingleComponent2 {
  category: CategoryData;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.a15service.getCategory(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: category => {
          this.error = ``;
          this.category = category;
          this.gameService(this.a15service, 'categories');
          this.genericSEO(this.category.name, `All items in ${this.category.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 