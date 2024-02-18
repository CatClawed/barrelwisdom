import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemList } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A15ItemComponent } from './a15-item.component';

@Component({
  templateUrl: 'a15-itemlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A15ItemComponent, MatButtonModule]
})

export class A15ItemlistComponent extends ModalUseComponent {
  filteredItems: Observable<ItemList[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a15service: A15Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      filtering: '',
      type: 'Any',
      elementval: 0,
      element: "Any"
    })
  }

  changeData() {
    this.gameService(this.a15service, 'items');
    this.genericSEO(`Items`, `The list of items in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      items: this.a15service.getItemList(this.language),
      categories: this.a15service.getCategories(this.language)
    })
  }
  afterAssignment(): void {
    this.filteredItems = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<ItemList[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.element, search.filtering) : this.data.items.slice())
    );
  }


  private filterT(value: string, type: string, elementV: number, element: string, ing: string): ItemList[] {
    let list: ItemList[] = this.data.items;

    if (type != 'Any') {
      list = list.filter(item => item.categories.some(c => c.name == type));
    }

    if (elementV > 1) {
      list = list.filter(item => item.evalue >= elementV);
    }
    switch (element) {
      case "Fire":
        list = list.filter(item => item.fire)
        break;
      case "Water":
        list = list.filter(item => item.water)
        break;
      case "Wind":
        list = list.filter(item => item.wind)
        break;
      case "Earth":
        list = list.filter(item => item.earth)
        break;
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