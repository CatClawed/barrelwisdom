import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';
import { category_to_icon } from './a26-item-icons';

@Component({
    templateUrl: 'a26-item.component.html',
    selector: 'a26-item',
    providers: [DestroyService],
    styleUrls: ['../yumia.scss'],
    imports: [...CommonImports, Popover, A26MapComponent]
})
export class A26ItemComponent extends SingleComponent {
  category_to_icon = category_to_icon

  constructor(
    protected historyService: HistoryService,
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a26service, 'items');
    return this.a26service.getItem(this.slug, this.language);
  }

  afterAssignment(): void {
    //this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc ? this.data.desc : this.data.cats[0].name,
      this.a26service.itemString[this.language],
      false,
      this.inputSlug ? false : true);
  }
}