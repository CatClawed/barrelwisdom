import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Catalyst } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FilterableComponent } from '@app/views/games/_prototype/filterable.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-catalystlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports]
})

export class A18CatalystlistComponent extends FilterableComponent {
  filteredCatalysts: Observable<Catalyst[]>;
  query: string = "";
  colors = {
    "white": [`regular fa-circle`, `black`],
    "yellow": [`solid fa-circle`, `#edc200`],
    "violet": [`solid fa-circle`, `#ac07bb`],
    "red": [`solid fa-circle`, `#ae4641`],
    "blue": [`solid fa-circle`, `#445e7b`],
    "green": [`solid fa-circle`, `#42b600`],
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
    protected readonly destroy$: DestroyService,
  ) {
    super(destroy$, route, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
    // unused??
    this.query = this.route.snapshot.queryParamMap.get('search');
    if (this.query) { this.pageForm.controls['filtertext'].patchValue(this.query); }
  }

  changeData() {
    this.gameService(this.a18service, 'catalysts');
    this.genericSEO(`Catalysts`, `The list of catalysts in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getCatalystList(this.language);
  }

  afterAssignment(): void {
    this.filteredCatalysts = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Catalyst[]>),
      map((search: any) => search || this.query ? this.filterT(search ? search.filtertext : "") : this.data.slice())
    );
    this.pageForm.controls['filtertext'].setValue(this.query);
  }

  private filterT(value: string): Catalyst[] {
    if (this.query) {
      value = this.query;
      this.query = "";
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