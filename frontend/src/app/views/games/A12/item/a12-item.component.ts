import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-item.component.html',
  selector: 'a12-item',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A12ItemComponent extends SingleComponent {
  itemone: boolean = false;
  itemtwo: boolean = false;
  itemthree: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a12service, 'items');
    return this.a12service.getItem(this.slug, this.language);
  }
  afterAssignment(): void {
    if (this.data.effectline_set) {
      for (let effline of this.data.effectline_set) {
        if (effline.itemnum == 1) { this.itemone = true; }
        if (effline.itemnum == 2) { this.itemtwo = true; }
        if (effline.itemnum == 3) { this.itemthree = true; }
      }
    }
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slugname}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Items',
      false,
      this.inputSlug ? false : true
    );
  }
} 