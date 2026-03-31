import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25CharaComponent } from '../character/a25-chara.component';
import { A25ItemComponent } from '../item/a25-item.component';
import { A25TraitComponent } from './a25-trait.component';

@Component({
    templateUrl: 'a25-traitlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A25TraitComponent, FilterListComponent]
})

export class A25TraitlistComponent extends DialogUseComponent {
  protected a25service = inject(A25Service);
  filteredTraits: Observable<Trait[]>;
  c2;
  c3;

  constructor() {
    super();
    this.component = A25TraitComponent;
    this.c2 = A25CharaComponent;
    this.c3 = A25ItemComponent;
    this.pageForm = this.formBuilder.group({
      filtertext: '',
      transfers: "any"
    })
  }

  changeData() {
    this.gameService(this.a25service, 'traits');
    this.genericSettings(this.a25service.trait_translation[this.language], `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      traits: this.a25service.getTraitList(this.language),
      transfer: this.a25service.getFilter("combat_type", this.language),
    })
  }

  override afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.traits.slice())
    );
  }

  override extraSettings(): void {
    this.dialogref.componentInstance.itemkind = 'materials'
  }

  private filterT(value: string, transfer: string): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data.traits;

    switch (transfer) {
      case "attack":
        traitlist = traitlist.filter(trait => trait.trans_atk);
        break;
      case "healing":
        traitlist = traitlist.filter(trait => trait.trans_heal);
        break;
      case "buff":
        traitlist = traitlist.filter(trait => trait.trans_buff);
        break;
      case "debuff":
        traitlist = traitlist.filter(trait => trait.trans_dbf);
        break;
      case "equipment":
        traitlist = traitlist.filter(trait => trait.trans_wep);
        break;
    }
    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      return trait.name.toLowerCase().includes(filterValue) ||
        trait.desc.toLowerCase().includes(filterValue)
    });
  }
}