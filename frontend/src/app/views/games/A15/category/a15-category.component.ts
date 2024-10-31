import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-category.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A15CategoryComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  changeData() {
    this.gameService(this.a15service, 'categories');
    return this.a15service.getCategory(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
} 