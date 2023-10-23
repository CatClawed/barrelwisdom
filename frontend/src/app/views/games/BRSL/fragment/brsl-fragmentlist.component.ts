import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Event, NameLink, SchoolLocation } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-fragmentlist.component.html',
  providers: [DestroyService]
})

export class BRSLFragmentComponent extends SingleComponent2 {
  pageForm: UntypedFormGroup;
  fragmentControl: UntypedFormControl;
  event: Event[];
  character: NameLink[];
  location: SchoolLocation[];
  filteredEvents: Observable<Event[]>;
  selectedChar = "Any";
  selectedLoc = "Any";

  constructor(
    private formBuilder: UntypedFormBuilder,
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private brslservice: BRSLService,
    protected seoService: SeoService,
  ) {
    super(destroy$, route, seoService);
    this.fragmentControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.fragmentControl,
      character: ['Any'],
      location: ['Any']
    })
  }


  changeData() {
    this.brslservice.getCharacterList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: f => {
          this.character = f.slice(2);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    this.brslservice.getSchoolLocationList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: f => {
          this.location = f;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    this.brslservice.getFragmentList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: fragment => {
          this.event = fragment;
          this.gameService(this.brslservice, 'fragments-and-dates');
          this.genericSEO(`Fragments & Dates`, `All fragments and dates in ${this.gameTitle}.`);
          this.filteredEvents = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Event[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.character, search.location) : this.event.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, char: string, loc: string): Event[] {
    let list: Event[] = this.event;
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

  get f() { return this.pageForm.controls; }

  identify(index, item) {
    return item.slug;
  }
}