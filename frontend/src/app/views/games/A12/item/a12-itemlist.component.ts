import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemList } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12ItemComponent } from './a12-item.component';

@Component({
  templateUrl: 'a12-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A12ItemComponent, MatButtonModule]
})

export class A12ItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<ItemList[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a12service: A12Service,) {
    super(destroy$, router, route, location, seoService, cdkDialog);
    this.component = A12ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      type: 'Any',
      level: 0,
    })
  }

  changeData() {
    this.gameService(this.a12service, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a12service.getItemList(this.language),
      categories: this.a12service.getCategories(this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.level, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, level: number, ing: string): ItemList[] {
    let list: ItemList[] = this.data.items;

    if (type != 'Any') {
      list = list.filter(item => item.item_type != 'Equipment');
      list = list.filter(item => item.categories.some(c => c.name == type));
    }
    if (level > 0) {
      list = list.filter(item => item.level >= level);
    }
    if (ing) {
      const filterValue = ing.toLowerCase();
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