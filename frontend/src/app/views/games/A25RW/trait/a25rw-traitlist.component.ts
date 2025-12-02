import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWTraitComponent } from './a25rw-trait.component';

@Component({
    templateUrl: 'a25rw-traitlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A25RWTraitComponent, FilterListComponent]
})

export class A25RWTraitlistComponent extends DialogUseComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)
  filteredTraits: Observable<Trait[]>;

  constructor() {
    super();
    this.component = A25RWTraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      com: false,
      res: false,
      inh: false,
      boo: false,
      wep: false,
      arm: false,
      acc: false,
      exp: false,
      syn: false,
      sta: false,
    })
  }

  changeData() {
    this.gameService(this.a25rwservice, 'traits');
    this.genericSettings(this.a25rwservice.trait_translation[this.language], `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a25rwservice.getTraitList(this.language);
  }

  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.com, search.res, search.inh, search.boo, search.wep, search.arm, search.acc, search.exp, search.syn, search.sta) : this.data.slice())
    );
  }

  private filterT(value: string, com, res, inh, boo, wep, arm, acc, exp, syn, sta): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    traitlist = syn  ? traitlist.filter(trait => trait.syn) : traitlist;
    traitlist = com  ? traitlist.filter(trait => trait.com) : traitlist;
    traitlist = res  ? traitlist.filter(trait => trait.res) : traitlist;
    traitlist = inh  ? traitlist.filter(trait => trait.inh) : traitlist;
    traitlist = boo  ? traitlist.filter(trait => trait.boo) : traitlist;
    traitlist = wep  ? traitlist.filter(trait => trait.wep) : traitlist;
    traitlist = arm  ? traitlist.filter(trait => trait.arm) : traitlist;
    traitlist = acc  ? traitlist.filter(trait => trait.acc) : traitlist;
    traitlist = sta  ? traitlist.filter(trait => trait.sta) : traitlist;
    traitlist = exp  ? traitlist.filter(trait => trait.exp) : traitlist;
    if (com || res || inh || boo || wep || arm || acc || exp || syn || sta) {
      traitlist = traitlist.filter(trait => !(trait.com && trait.res && trait.inh && trait.boo && trait.wep && trait.arm && trait.acc && trait.exp && trait.syn && trait.sta));
    }

    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      if (trait.combo1 && trait.combo2) {
        return trait.name.toLowerCase().includes(filterValue) ||
          trait.desc.toLowerCase().includes(filterValue) ||
          trait.combo1.name.toLowerCase().includes(filterValue) ||
          trait.combo2.name.toLowerCase().includes(filterValue)
      }
      return trait.name.toLowerCase().includes(filterValue) ||
        trait.desc.toLowerCase().includes(filterValue)
    });
  }
}