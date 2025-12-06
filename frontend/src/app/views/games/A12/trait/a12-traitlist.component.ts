import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12TraitComponent } from './a12-trait.component';

@Component({
    templateUrl: 'a12-traitlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A12TraitComponent, FilterListComponent]
})
export class A12TraitlistComponent extends DialogUseComponent {
  protected a12service = inject(A12Service);
  filteredTraits: Observable<Trait[]>;

  constructor() {
    super();
    this.component = A12TraitComponent
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: ''
    })
  }

  changeData() {
    this.gameService(this.a12service, 'traits');
    this.genericSettings(`Traits`, `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getTraitList(this.language);
  }
  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.slice())
    );
  }

  private filterT(value: string, transfer: string): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    switch (transfer) {
      case "3": {
        traitlist = traitlist.filter(trait => trait.usable);
        break;
      }
      case "5": {
        traitlist = traitlist.filter(trait => trait.ingot);
        break;
      }
      case "6": {
        traitlist = traitlist.filter(trait => trait.cloth);
        break;
      }
      case "7": {
        traitlist = traitlist.filter(trait => trait.accessory);
        break;
      }
    }
    if (value) {
      const filterValue = value.toLowerCase();
      return traitlist.filter(trait => {
        return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
      });
    }
    return traitlist;
  }
}