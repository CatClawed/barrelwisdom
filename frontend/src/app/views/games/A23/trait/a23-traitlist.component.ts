import { Component, inject } from '@angular/core';
import { FilterButtonsComponent } from '@app/views/_components/filter-buttons/filter-buttons.component';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A23TraitComponent } from './a23-trait.component';

@Component({
  templateUrl: 'a23-traitlist.component.html',
  imports: [...CommonImports, ...MaterialFormImports,
    A23TraitComponent, FilterListComponent, FilterButtonsComponent]
})

export class A23TraitlistComponent extends DialogUseComponent {
  protected a23service = inject(A23Service);
  filteredTraits: Observable<Trait[]>;

  constructor() {
    super();
    this.component = A23TraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      atk: false,
      heal: false,
      dbf: false,
      buff: false,
      wpn: false,
      arm: false,
      acc: false,
      tal: false,
      exp: false,
    })
  }
  changeData() {
    this.gameService(this.a23service, 'traits');
    this.genericSettings(this.a23service.trait_translation[this.language], `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a23service.getTraitList(this.language);
  }

  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.atk, search.heal, search.dbf, search.buff, search.wpn, search.arm, search.acc, search.tal, search.exp) : this.data.slice())
    );
  }

  private filterT(value: string, atk: boolean, heal: boolean, dbf: boolean, buff: boolean, wpn: boolean, arm: boolean, acc: boolean, tal: boolean, exp: boolean): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    if (atk || heal || dbf || buff || wpn || arm || acc || tal || exp) {
      traitlist = traitlist.filter(trait => trait.trans_atk !== trait.trans_heal !== trait.trans_dbf !== trait.trans_buff !== trait.trans_wpn !== trait.trans_arm !== trait.trans_acc !== trait.trans_tal !== trait.trans_syn !== trait.trans_exp);
    }
    if (atk) {
      traitlist = traitlist.filter(trait => trait.trans_atk);
    }
    if (heal) {
      traitlist = traitlist.filter(trait => trait.trans_heal);
    }
    if (dbf) {
      traitlist = traitlist.filter(trait => trait.trans_dbf);
    }
    if (buff) {
      traitlist = traitlist.filter(trait => trait.trans_buff);
    }
    if (wpn) {
      traitlist = traitlist.filter(trait => trait.trans_wpn);
    }
    if (arm) {
      traitlist = traitlist.filter(trait => trait.trans_arm);
    }
    if (acc) {
      traitlist = traitlist.filter(trait => trait.trans_acc);
    }
    if (tal) {
      traitlist = traitlist.filter(trait => trait.trans_tal);
    }
    if (exp) {
      traitlist = traitlist.filter(trait => trait.trans_exp);
    }
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