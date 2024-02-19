import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule, PopoverBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25ItemComponent } from './a25-item.component';

@Component({
  templateUrl: 'a25-materiallist.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    PopoverBandaidModule, A25ItemComponent, MatButtonModule]
})

export class A25MaterialListComponent extends ModalUseComponent {
  filteredItems: Observable<Item[]>;
  combat = {
    "en":"Combat",
    "ja":"戦闘",
    "sc":"战斗道具",
    "tc":"戰鬥道具"
  }

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    protected a25service: A25Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtertrait: '',
      color: 'Any',
      rarity: '0',
      traittype: 'Any'
    })
  }

  changeData() {
    this.gameService(this.a25service, 'items/materials');
    this.genericSEO(`Materials`, `The list of materials in ${this.gameTitle}.`);
    this.pageForm.reset()
    return forkJoin({
      items: this.a25service.getMaterialList(this.language),
      colors: this.a25service.getFilter('color', this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.color, search.rarity, search.filtertrait, search.traittype) : this.data.items.slice())
    );
  }

  private filterT(value: string, color: string, rarity: number, filter: string, traittype: string): Item[] {
    let list: Item[] = this.data.items;

    if (color != 'Any') {
      list = list.filter(item => item.material[0].color == color);
    }
    if (rarity > 0) {
      list = list.filter(item => item.rarity == rarity)
    }
    if (traittype !== 'Any') {
      list = list.filter(item => item.material[0].traits ? item.material[0].traits[0].kind === traittype : false)
    }
    if (filter) {
      filter = filter.toLocaleLowerCase()
      list = list.filter(item => item.material[0].traits ?
        (item.material[0].traits.some(t =>
          t.name.toLowerCase().includes(filter) )
        ) : false)
    }
    if (value) {
      const filterValue = value.toLowerCase();
      list = list.filter(item => {
        return item.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }

  insertStyle(item: Item): string {
    if (!item.material[0].color) return;
    return `box-shadow: inset 0 0px 30px 4px ${this.a25service.colorList[item.material[0].color]}`
  }
}