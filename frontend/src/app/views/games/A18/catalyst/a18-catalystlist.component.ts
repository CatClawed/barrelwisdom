import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Catalyst } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { A18ItemComponent } from '@app/views/games/A18/item/a18-item.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'a18-catalystlist.component.html',
    styleUrl: '../a18.scss',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
      ItemComponent]
})

export class A18CatalystlistComponent extends DialogUseComponent {
  protected a18service = inject(A18Service);
  filteredCatalysts: Observable<Catalyst[]>;
  query: string = null;
  colors = {
    "white": [`fa-empty-circle`, `black`],
    "yellow": [`fa-circle`, `#edc200`],
    "violet": [`fa-circle`, `#ac07bb`],
    "red": [`fa-circle`, `#ae4641`],
    "blue": [`fa-circle`, `#445e7b`],
    "green": [`fa-circle`, `#42b600`],
  }

  constructor() {
    super();
    this.component = A18ItemComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
    this.query = this.route.snapshot.queryParamMap.get('search');
  }

  changeData() {
    this.gameService(this.a18service, 'catalysts');
    this.genericSettings(this.a18service.catalyst_translation[this.language],
      `The list of catalysts in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getCatalystList(this.language);
  }

  override afterAssignment(): void {
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