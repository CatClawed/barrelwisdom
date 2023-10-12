import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { NameLink, Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-materiallist.component.html',
  providers: [DestroyService]
})

export class A25MaterialListComponent extends ListComponent implements OnInit {
  itemControl: UntypedFormControl;
  traitControl: UntypedFormControl;
  items: Item[];
  filteredItems: Observable<Item[]>;
  colors: NameLink[];
  colorList = {
    'red':    'rgba(182,60,60,.7);',
    'blue':   'rgba(56,131,173,0.7);',
    'green':  'rgba(62,184,128,0.7);',
    'yellow': 'rgba(201,175,71,0.7);',
    'purple': 'rgba(172,72,185,0.7);'
  }

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
    this.gameService(this.a25service, 'items');
    this.itemControl = new UntypedFormControl();
    this.traitControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.itemControl,
      filtertrait: this.traitControl,
      color: ['Any'],
      rarity: ['0']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getItems();
    this.getColors();
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
  }

  getItems() {
    this.a25service.getMaterialList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: items => {
          this.items = items;
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

  identify2(index, item) {
    return item.slug;
  }

  openModal(template: TemplateRef<any>, slug: string, event?) {
    if (event) {
      if (event.ctrlKey) {
        return;
      }
      else {
        event.preventDefault()
      }
    }
    this.selected = slug;
    this.location.go(`${this.gameURL}/${this.section}/materials/${slug}/${this.language}`);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide
      .pipe(takeUntil(this.destroy$))
      .subscribe((reason: string | any) => {
        if (reason != "link") {
          this.location.go(`${this.gameURL}/${this.section}/materials/${this.language}`);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }
      })
  }
  insertStyle(item: Item): string {
    if (!item.material[0].color) return;

    return `box-shadow: inset 0 0px 30px 4px ${this.colorList[item.material[0].color]}`
  }
}