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
      atk: false,
      wep: false,
      arm: false,
      acc: false,
    })
  }

  changeData() {
    this.gameService(this.a12service, 'traits');
    this.genericSettings(this.a12service.trait_translation[this.language],
      `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getTraitList(this.language);
  }
  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.atk, search.wep, search.arm, search.acc) : this.data.slice())
    );
  }

  private filterT(value: string, atk: boolean, wep: boolean, arm: boolean, acc: boolean): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;

    if (atk) {
      traitlist = traitlist.filter(trait => trait.usable);
    }
    if (wep) {
      traitlist = traitlist.filter(trait => trait.ingot);
    }
    if (arm) {
      traitlist = traitlist.filter(trait => trait.cloth);
    }
    if (acc) {
      traitlist = traitlist.filter(trait => trait.accessory);
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