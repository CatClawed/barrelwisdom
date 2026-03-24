import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18TraitComponent } from './a18-trait.component';

@Component({
    templateUrl: 'a18-traitlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A18TraitComponent, FilterListComponent]
})

export class A18TraitlistComponent extends DialogUseComponent {
  protected a18service = inject(A18Service);
  filteredTraits: Observable<Trait[]>;

  constructor() {
    super();
    this.component = A18TraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      syn: false,
      atk: false,
      heal: false,
      wep: false,
      arm: false,
      acc: false,
    })
  }

  changeData() {
    this.gameService(this.a18service, 'traits');
    this.genericSettings(this.a18service.trait_translation[this.language],
      `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getTraitList(this.language);
  }

  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.syn, search.atk, search.heal, search.wep, search.arm, search.acc) : this.data.slice())
    );
  }

  private filterT(value: string, syn: boolean, atk: boolean, heal: boolean, wep: boolean, arm: boolean, acc: boolean): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    if (syn || atk || heal || wep || arm || acc) {
      traitlist = traitlist.filter(trait => !(trait.trans_atk === trait.trans_heal === trait.trans_wpn === trait.trans_arm === trait.trans_acc === trait.trans_syn));
    }

      if (syn) traitlist = traitlist.filter(trait => trait.trans_syn);
      if (atk) traitlist = traitlist.filter(trait => trait.trans_atk);
      if (heal) traitlist = traitlist.filter(trait => trait.trans_heal);
      if (wep) traitlist = traitlist.filter(trait => trait.trans_wpn);
      if (arm) traitlist = traitlist.filter(trait => trait.trans_arm);
      if (acc) traitlist = traitlist.filter(trait => trait.trans_acc);

    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      if (trait.combo1) {
        return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue) || trait.combo1.name.toLowerCase().includes(filterValue) || trait.combo2.name.toLowerCase().includes(filterValue)
      }
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
    });
  }
}