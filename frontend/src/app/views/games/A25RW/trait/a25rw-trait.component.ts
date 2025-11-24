import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25rw-trait.component.html',
    selector: 'a25rw-trait',
    providers: [DestroyService],
    imports: [...CommonImports, Tooltip]
})
export class A25RWTraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25rwservice: A25RWService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a25rwservice, 'traits');
    return this.a25rwservice.getTrait(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a25rwservice.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}