import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { CategoryData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-category.component.html',
  providers: [DestroyService]
})
export class A12CategoryComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a12service, 'categories');
    return this.a12service.getCategory(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, `All items in ${this.data.name}`);
  }
} 