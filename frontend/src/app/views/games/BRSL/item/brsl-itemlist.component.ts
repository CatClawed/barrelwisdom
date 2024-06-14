import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { ItemList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLItemComponent } from './brsl-item.component';

@Component({
  templateUrl: 'brsl-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    BRSLItemComponent, MatButtonModule]
})

export class BRSLItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<ItemList[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private brslservice: BRSLService,) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = BRSLItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      category: 'Any',
      type: 'Any'
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'items');
    this.genericSettings(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.brslservice.getItemList(this.language),
      categories: this.brslservice.getCategoryList(this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.category) : this.data.items.slice())
    );
  }

  private filterT(value: string, type: string, category: string): ItemList[] {
    let list: ItemList[] = this.data.items;
    if (type != 'Any') {
      list = list.filter(item => item.itemtype == type);
    }
    if (category != 'Any') {
      list = list.filter(item => item.category.some(c => c.name == category));
    }
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}