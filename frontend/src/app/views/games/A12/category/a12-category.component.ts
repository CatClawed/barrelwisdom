import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { CategoryData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-category.component.html',
  providers: [DestroyService]
})
export class A12CategoryComponent extends SingleComponent2 {
  category: CategoryData;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a12service.getCategory(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: category => {
          this.error = ``;
          this.category = category;
          this.gameService(this.a12service, 'categories');
          this.genericSEO(this.category.name, `All items in ${this.category.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 