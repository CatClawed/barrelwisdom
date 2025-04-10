import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    templateUrl: 'a26-trait.component.html',
    selector: 'a26-trait',
    providers: [DestroyService],
    imports: [...CommonImports, Tooltip, A26MapComponent]
})
export class A26TraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a26service, 'traits');
    return this.a26service.getTrait(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc1,
      this.a26service.traitString[this.language],
      false,
      this.inputSlug ? false : true);
  }
}