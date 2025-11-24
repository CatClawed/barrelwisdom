import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Item } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A26ItemComponent } from './a26-item.component';
import { category_to_icon } from './a26-item-icons';


@Component({
    templateUrl: 'a26-itemlist.component.html',
    providers: [DestroyService],
    styleUrls: ['../yumia.scss'],
    imports: [...CommonImports, ...MaterialFormImports, ItemComponent,
        FilterListComponent, MatButtonModule]
})

export class A26ItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<Item[]>;
  category_to_icon = category_to_icon
  things;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    protected a26service: A26Service) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A26ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      cat: '',
      mat: '',
      element: 'Any',
      fire: false,
      ice: false,
      bolt: false,
      air: false,
      gather: false,
      consumable: false,
      synth: false,
      equip: false,
      explore: false,
      key: false,
      furniture: false,
    })

    this.things = [
      this.pageForm.controls.gather,
      this.pageForm.controls.consumable,
      this.pageForm.controls.synth,
      this.pageForm.controls.equip,
      this.pageForm.controls.explore,
      this.pageForm.controls.key,
      this.pageForm.controls.furniture,
    ]
  }

  changeData() {
    this.gameService(this.a26service, 'items');
    this.genericSettings(this.a26service.item_translation[this.language], `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a26service.getItemList(this.language),
      categories: this.a26service.getCategoryList(this.language),
      materials: this.a26service.getMaterialList(this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.mat, search.fire, search.ice, search.bolt, search.air, search.gather, search.consumable, search.synth, search.equip, search.explore, search.key, search.furniture) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, mat: string, fire, ice, bolt, air, gather, consumable, synth, equip, explore, key, furniture,): Item[] {
    this.hide = false;
    let list: Item[] = this.data.items;
    if (cat != '--' && cat !== '') {
      list = list.filter(item => item.cats.some(c => c.name == cat));
    }
    if (mat != '--' && mat !== '') {
      list = list.filter(item => item.mats ? item.mats.some(c => c.name == mat) : false);
    }
    list = fire ? list.filter(trait => trait.fire) : list;
    list = ice  ? list.filter(trait => trait.ice)  : list;
    list = bolt ? list.filter(trait => trait.bolt) : list;
    list = air  ? list.filter(trait => trait.air)  : list;

    list = gather     ? list.filter(item => item.mats) : list;
    list = consumable ? list.filter(item => item.cats.some(c => c.id == '31' || c.id == '29')) : list;
    list = synth      ? list.filter(item => item.mats === undefined && item.cats.some(c => c.id != '31' && c.id != '29' && c.id != '38' && c.id != '37' && c.id != '40' && c.id != '34' && c.id != '35' && c.id != '36')) : list;
    list = equip      ? list.filter(item => item.cats.some(c => c.id == '34' || c.id == '35' || c.id == '36')) : list;
    list = explore    ? list.filter(item => item.cats.some(c => c.id == '37')) : list;
    list = key        ? list.filter(item => item.cats.some(c => c.id == '40')) : list;
    list = furniture  ? list.filter(item => item.cats.some(c => c.id == '38')) : list;
    if (!value) {
      return list
    }
    const filterValue = value.toLowerCase();
    return list.filter(item => {
      return item.name.toLowerCase().includes(filterValue);
    });
  }
}