import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { CategoryItem } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-category.component.html',
  providers: [DestroyService]
})
export class A22CategoryComponent extends SingleComponent {
  category: CategoryItem;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a22service.getCategoryItem(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: category => {
          this.error = ``;
          this.category = category;
          this.gameService(this.a22service, 'categories');
          this.genericSEO(this.category.name, `All items in ${this.category.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 