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


@Component({
    templateUrl: 'a26-itemlist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports, ItemComponent,
        FilterListComponent, MatButtonModule]
})

export class A26ItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<Item[]>;

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
      cat: 'Any',
      mat: 'Any',
      element: 'Any'
    })
  }

  changeData() {
    this.gameService(this.a26service, 'items');
    this.genericSettings(`Items`, `The list of items in ${this.gameTitle}.`);
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
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.mat, search.element) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, mat: string, element: string): Item[] {
    this.hide = false;
    let list: Item[] = this.data.items;
    if (cat != 'Any') {
      list = list.filter(item => item.cats.some(c => c.name == cat));
    }
    if (mat != 'Any') {
      list = list.filter(item => item.mats ? item.mats.some(c => c.name == mat) : false);
    }
    switch (element) {
      case "Fire":
        list = list.filter(item => item.fire)
        break;
      case "Ice":
        list = list.filter(item => item.ice)
        break;
      case "Bolt":
        list = list.filter(item => item.bolt)
        break;
      case "Air":
        list = list.filter(item => item.air)
        break;
    }
    if (!value) {
      return list
    }
    const filterValue = value.toLowerCase();
    return list.filter(item => {
      return item.name.toLowerCase().includes(filterValue);
    });
  }
}