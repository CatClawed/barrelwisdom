import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18ItemComponent } from './a18-item.component';


@Component({
  templateUrl: 'a18-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A18ItemComponent, MatButtonModule]
})

export class A18ItemlistComponent extends DialogUseComponent {
  filteredItems: Observable<Item[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service) {
    super(destroy$, router, route, location, seoService, cdkDialog);
    this.component = A18ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      cat: 'Any',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a18service.getItemList(this.language),
      categories: this.a18service.getCategoryList(this.language)
    })
  }

  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Item[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.cat, search.filtering) : this.data.items.slice())
    );
  }

  private filterT(value: string, cat: string, ingt: string): Item[] {
    let list: Item[] = this.data.items;
    if (cat != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == cat) || (item.add ? item.add.some(c => c.name == cat) : false));
    }
    if (ingt) {
      const filterValue = ingt.toLowerCase();
      list = list.filter(item => ((item.ing) ? item.ing.some(i =>
        i.name.toLowerCase().includes(filterValue))
        : false))
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