import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Catalyst } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DialogUseComponent } from '../../_prototype/dialog-use.component';
import { A18ItemComponent } from '../item/a18-item.component';

@Component({
  templateUrl: 'a18-catalystlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, FilterListComponent, ItemComponent]
})

export class A18CatalystlistComponent extends DialogUseComponent {
  filteredCatalysts: Observable<Catalyst[]>;
  query: string = null;
  colors = {
    "white": [`regular fa-circle`, `black`],
    "yellow": [`solid fa-circle`, `#edc200`],
    "violet": [`solid fa-circle`, `#ac07bb`],
    "red": [`solid fa-circle`, `#ae4641`],
    "blue": [`solid fa-circle`, `#445e7b`],
    "green": [`solid fa-circle`, `#42b600`],
  }

  constructor(
    protected cdkDialog: Dialog,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
    protected readonly destroy$: DestroyService,
  ) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A18ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
    this.query = this.route.snapshot.queryParamMap.get('search');
  }

  changeData() {
    this.gameService(this.a18service, 'catalysts');
    this.genericSettings(`Catalysts`, `The list of catalysts in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getCatalystList(this.language);
  }

  afterAssignment(): void {
    this.filteredCatalysts = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Catalyst[]>),
      map((search: any) => search || this.query ? this.filterT(search ? search.filtertext : "") : this.data.slice())
    );
    if (this.query) { this.pageForm.controls['filtertext'].setValue(this.query); }
  }

  private filterT(value: string): Catalyst[] {
    this.hide = false;
    if (this.query) {
      value = this.query;
      this.query = null;
    }
    let catalystlist: Catalyst[] = this.data;

    if (!value) {
      return catalystlist;
    }
    const filterValue = value.toLowerCase();
    return catalystlist.filter(catalyst => {
      return catalyst.item.name.toLowerCase().includes(filterValue) ||
        catalyst.action.some(act => act.toLowerCase().includes(filterValue)) ||
        catalyst.item.categories.some(cat => cat.name.toLowerCase().includes(filterValue))
    });
  }
}