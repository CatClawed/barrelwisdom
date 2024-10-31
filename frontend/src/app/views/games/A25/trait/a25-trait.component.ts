import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-trait.component.html',
  selector: 'a25-trait',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, NgTemplateOutlet]
})
export class A25TraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25service: A25Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  @Output()
  charClicked = new EventEmitter<string>();

  @Output()
  itemClicked = new EventEmitter<string>();

  changeData() {
    this.gameService(this.a25service, 'traits');
    return this.a25service.getTrait(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name,
      this.data.desc.replaceAll('{0}', this.data.val[0] + ' ~ ' + this.data.val[4]),
      'Traits',
      false,
      this.inputSlug ? false : true);
  }
}