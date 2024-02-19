import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A22ItemComponent } from './a22-item.component';

@Component({
  templateUrl: 'a22-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A22ItemComponent, MatButtonModule]
})

export class A22ItemlistComponent extends ModalUseComponent {
  filteredItems: Observable<Item[]>;
  icons = {
    'Attack':    'type-attack',
    'Heal':      'type-heal',
    "Debuff":    'type-debuff',
    "Buff":      'type-buff',
    'Weapon':    'type-weapon',
    "Armor":     'type-armor',
    "Accessory": 'type-accessory',
    "Rare Item": 'category-key-items',
    "Synthesis": 'type-synthesis',
    "Material":  'material',
    "Essence":   'category-essence',
    "Field":     'category-tools'
  }

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a22service: A22Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      type: 'Any',
      elementval: 1,
      element: "Any"
    })
  }

  changeData() {
    this.gameService(this.a22service, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a22service.getItemList(this.language),
      categories: this.a22service.getCategoryList(this.language)
    });
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.element, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, elementV: number, element: string, ingt: string): Item[] {
    let list: Item[] = this.data.items;

    if (type != 'Any') {
      list = list.filter(item => item.category.some(c => c.name == type));
    }
    if (elementV > 1) {
      list = list.filter(item => item.elementvalue >= elementV);
    }
    switch (element) {
      case "Fire":
        list = list.filter(item => item.fire)
        break;
      case "Ice":
        list = list.filter(item => item.ice)
        break;
      case "Lightning":
        list = list.filter(item => item.lightning)
        break;
      case "Wind":
        list = list.filter(item => item.wind)
        break;
    }
    if (ingt) {
      const filterValue = ingt.toLowerCase();
      list = list.filter(item => (item.ingredient_set) ? item.ingredient_set.some(i => i.ing.toLowerCase().includes(filterValue)) : false)
    }
    if (value) {
      const filterValue = value.toLowerCase();
      list = list.filter(item => {
        return item.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}