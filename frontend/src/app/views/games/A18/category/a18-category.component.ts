import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-category.component.html',
  providers: [DestroyService]
})
export class A18CategoryComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a18service, 'categories');
    return this.a18service.getCategory(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, `All items in ${this.data.name}`);
  }
} 