import { Component, inject } from '@angular/core';
import { FilterButtonsComponent } from '@app/views/_components/filter-buttons/filter-buttons.component';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A26TraitComponent } from './a26-trait.component';

@Component({
    templateUrl: 'a26-traitlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A26TraitComponent, FilterListComponent, FilterButtonsComponent]
})

export class A26TraitlistComponent extends DialogUseComponent {
  protected a26service = inject(A26Service);
  filteredTraits: Observable<Trait[]>;

  constructor() {
    super();
    this.component = A26TraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: 0,
      atk: false,
      heal: false,
      buff: false,
      dbf: false,
      wep: false,
      arm: false,
      acc: false,
    })
  }

  changeData() {
    this.gameService(this.a26service, 'traits');
    this.genericSettings(this.a26service.trait_translation[this.language], `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a26service.getTraitList(this.language);
  }

  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.atk, search.heal, search.buff, search.dbf, search.wep, search.arm, search.acc) : this.data.slice())
    );
  }

  private filterT(value: string, atk, heal, buff, dbf, wep, arm, acc): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    traitlist = atk  ? traitlist.filter(trait => trait.atk) : traitlist;
    traitlist = heal ? traitlist.filter(trait => trait.heal) : traitlist;
    traitlist = buff ? traitlist.filter(trait => trait.buff) : traitlist;
    traitlist = dbf  ? traitlist.filter(trait => trait.dbf) : traitlist;
    traitlist = wep  ? traitlist.filter(trait => trait.wep) : traitlist;
    traitlist = arm  ? traitlist.filter(trait => trait.arm) : traitlist;
    traitlist = acc  ? traitlist.filter(trait => trait.acc) : traitlist;

    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      if (trait.desc2) {
        return trait.name.toLowerCase().includes(filterValue) || trait.desc1.toLowerCase().includes(filterValue) || trait.desc2.toLowerCase().includes(filterValue)
      }
      return trait.name.toLowerCase().includes(filterValue) || trait.desc1.toLowerCase().includes(filterValue)
    });
  }
}