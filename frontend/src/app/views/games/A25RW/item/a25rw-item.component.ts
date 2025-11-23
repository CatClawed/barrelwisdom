import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A25RWTreeComponent } from './a25rw-tree.component';

@Component({
    templateUrl: 'a25rw-item.component.html',
    selector: 'a25rw-item',
    providers: [DestroyService],
    imports: [...CommonImports, Popover, A25RWTreeComponent]
})
export class A25RWItemComponent extends SingleComponent {

  constructor(
    protected historyService: HistoryService,
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25rwservice: A25RWService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a25rwservice, 'items');
    return this.a25rwservice.getItem(this.slug, this.language);
  }

  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`;
    this.genericSettings(this.data.name, this.data.desc ? this.data.desc : '',
      this.a25rwservice.item_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}