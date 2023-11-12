import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-itemlist.component.html',
  providers: [DestroyService]
})

export class A23ItemlistComponent extends ModalUseComponent {
  filteredItems: Observable<Item[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a23service: A23Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      cat: 'Any',
      kind: 'Any',
    })
  }

  changeData() {
    this.gameService(this.a23service, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a23service.getItemList(this.language),
      categories: this.a23service.getCategoryList(this.language)
    });
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.filtering, search.kind) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, ingt: string, kind: string): Item[] {
    let list: Item[] = this.data.items;

    if (cat != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == cat) || (item.add ? item.add.some(c => c.name == cat) : false));
    }
    if (kind != 'Any') {
      list = list.filter(item => item.kind == kind)
    }
    if (ingt) {
      const filterValue = (this.language == 'en') ? ingt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") : ingt;
      list = list.filter(item => ((item.ing) ? item.ing.some(i =>
      ((this.language == 'en') ?
        i.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filterValue) :
        i.name.includes(filterValue)))
        : false))
    }
    if (value) {
      const filterValue = (this.language == 'en') ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") : value;
      list = list.filter(item => {
        return ((this.language == 'en') ?
          (item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filterValue))
          : item.name.includes(filterValue));
      });
    }
    return list;
  }
}