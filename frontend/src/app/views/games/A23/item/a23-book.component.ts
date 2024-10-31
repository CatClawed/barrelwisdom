import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-book.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A23BookComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a23service, 'items/books');
    return this.a23service.getBook(this.slug, this.language)
  }

  afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSEO(this.data.name, `Recipe book in ${this.gameTitle}`)
    this.breadcrumbService.setBreadcrumbs([[this.gameTitle, `/${this.gameURL}`], ['Items', `/${this.gameURL}/items/${this.language}`]], this.data.name)
  }
} 