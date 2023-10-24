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
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-materiallist.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService]
})

export class A25MaterialListComponent extends ModalUseComponent {
  items: Item[];
  filteredItems: Observable<Item[]>;
  colors: NameLink[];

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
      filtertrait: '',
      color: 'Any',
      rarity: '0'
    })
  }

  changeData(): void {
    this.pageForm.reset()
    this.getItems();
    this.getColors();
  }

  getItems() {
    this.a25service.getMaterialList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
          this.gameService(this.a25service, 'items/materials');
          this.genericSEO(`Materials`, `The list of materials in ${this.gameTitle}.`);
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.color, search.rarity, search.filtertrait) : this.items.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getColors() {
    this.a25service.getFilter('color', this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: colors => {
          this.colors = colors;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, color: string, rarity: number, filter: string): Item[] {
    let list: Item[] = this.items;

    if (color != 'Any') {
      list = list.filter(item => item.material[0].color == color);
    }
    if (rarity > 0) {
      list = list.filter(item => item.rarity == rarity)
    }
    if (filter) {
      filter = filter.toLocaleLowerCase()
      list = list.filter(item => item.material[0].traits ?
        (item.material[0].traits.some(t =>
          t.name_en.toLowerCase().includes(filter) ||
          t.name_ja.includes(filter))
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