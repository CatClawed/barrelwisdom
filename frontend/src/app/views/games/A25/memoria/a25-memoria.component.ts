import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-memoria.component.html',
  selector: 'a25-memoria',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A25MemoriaComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25service: A25Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  rarity = {
    1: "R",
    2: "SR",
    3: "SSR"
  }

  changeData() {
    this.gameService(this.a25service, 'memoria');
    return this.a25service.getMemoria(this.slug, this.language)
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}memoria/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.skill_desc.replaceAll('{0}', this.data.lv1 + ' ~ ' + this.data.lv5).replaceAll('{1}', this.data.lv1 + ' ~ ' + this.data.lv5), 'Memoria', false, this.inputSlug ? false : true);
  }

}