import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-trait.component.html',
  selector: 'a12-trait',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A12TraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  changeData() {
    this.gameService(this.a12service, 'traits');
    return this.a12service.getTrait(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Traits',
      false,
      this.inputSlug ? false : true
    );
  }
} 