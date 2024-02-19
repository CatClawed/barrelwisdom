import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BRSLItemComponent } from './brsl-item.component';

@Component({
  templateUrl: 'brsl-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    BRSLItemComponent, MatButtonModule]
})

export class BRSLItemlistComponent extends ModalUseComponent {
  filteredItems: Observable<ItemList[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private brslservice: BRSLService,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      category: 'Any',
      type: 'Any'
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
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