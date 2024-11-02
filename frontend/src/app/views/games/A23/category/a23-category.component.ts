import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-category.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A23CategoryComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  changeData() {
    this.gameService(this.a23service, 'categories');
    return this.a23service.getCategory(this.slug, this.language)
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true)
  }
}