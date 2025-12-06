import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Popover } from '@app/views/_components/popover/popover.component';
import { Event } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FilterableComponent } from '@app/views/games/_prototype/filterable.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'brsl-fragmentlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, Popover,
        FilterListComponent]
})

export class BRSLFragmentComponent extends FilterableComponent {
  protected brslservice = inject(BRSLService);
  filteredEvents: Observable<Event[]>;

  constructor() {
    super();
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      character: 'Any',
      location: 'Any'
    })
  }

  changeData() {
    this.gameService(this.brslservice, 'fragments-and-dates');
    this.genericSettings(`Fragments & Dates`, `All fragments and dates in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      character: this.brslservice.getCharacterList(this.language),
      location: this.brslservice.getSchoolLocationList(this.language),
      fragment: this.brslservice.getFragmentList(this.language)
    })
  }

  override afterAssignment(): void {
    this.data.character = this.data.character.slice(2);
    this.filteredEvents = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Event[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.character, search.location) : this.data.fragment.slice())
    );
  }

  private filterT(value: string, char: string, loc: string): Event[] {
    this.hide = false;
    let list: Event[] = this.data.fragment;
    if (char != "Any") {
      list = list.filter(evt => (evt.character) ? evt.character.name == char : false)
    }
    if (loc != "Any") {
      list = list.filter(evt => (evt.location) ? evt.location.loc == loc : false)
    }
    if (value) {
      const filterValue = value.toLowerCase();
      list = list.filter(fragment => {
        return fragment.fragment.some(i => i.name.toLowerCase().includes(filterValue) || i.eff.toLowerCase().includes(filterValue) || i.desc.toLowerCase().includes(filterValue));
      });
    }
    return list;
  }
}