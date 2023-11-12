import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item, NameLink } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-synthlist.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService]
})

export class A25SynthesisListComponent extends ModalUseComponent {
  filteredItems: Observable<Item[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a25service: A25Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      kind: 'Any',
      rarity: '0'
    })
  }

  changeData() {
    this.gameService(this.a25service, 'items/synthesis');
    this.genericSEO(`Synthesis Items`, `The list of synthesis items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a25service.getSynthList(this.language),
      equipment_type: this.a25service.getFilter('equipment', this.language),
      combat_type: this.a25service.getFilter('combat_type', this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.kind, search.rarity, search.filtering) : this.data.items.slice())
    );
  }

  replaceVal(item: Item): string {
    if (item.equip) {
      if (item.equip[0].val_bad) {
        return item.desc.replaceAll("{0}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`).replaceAll("{1}", `${item.equip[0].val_bad / 100} ~ ${item.equip[0].val_good / 100}`)
      }
      return item.desc.replaceAll("{0}", ` ${item.equip[0].val_good / 100}`).replaceAll("{1}", ` ${item.equip[0].val_good / 100}`)
    }
    if (item.combat[0].val_bad) {
      return item.desc.replaceAll("{0}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`).replaceAll("{1}", `${item.combat[0].val_bad / 100} ~ ${item.combat[0].val_good / 100}`)
    }
    return item.desc.replaceAll("{0}", ` ${item.combat[0].val_good / 100}`).replaceAll("{1}", ` ${item.combat[0].val_good / 100}`)
  }

  private filterT(value: string, kind: string, rarity: number, filter: string): Item[] {
    let list: Item[] = this.data.items;

    if (kind != 'Any') {
      list = list.filter(item => item.equip ? item.equip[0].kind == kind : item.combat[0].kind == kind);
    }
    if (rarity > 0) {
      list = list.filter(item => item.rarity == rarity)
    }
    if (filter) {
      filter = filter.toLowerCase()
      list = list.filter(item => item.ing.some(i => i.toLowerCase().includes(filter)))
    }
    if (value) {
      const filterValue = value.toLowerCase();
      list = list.filter(item => {
        return item.name.toLowerCase().includes(filterValue) || item.desc.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}