import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-traitlist.component.html',
  providers: [DestroyService]
})
export class A12TraitlistComponent extends ListComponent implements OnInit {
  traitControl: FormControl;
  traits: Trait[];
  filteredTraits: Observable<Trait[]>;
  currentTransfer: string = "1";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a12service: A12Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a12service, 'traits');
    this.traitControl = new FormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.traitControl,
      transfers: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getTraits();
    this.genericSEO(`Traits`, `The list of traits in ${this.gameTitle}.`);
  }

  getTraits() {
    this.a12service.getTraitList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: traits => {
          this.traits = traits;
          this.filteredTraits = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Trait[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.traits.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, transfer: string): Trait[] {
    let traitlist: Trait[] = this.traits;
    switch (transfer) {
      case "3": {
        traitlist = this.traits.filter(trait => trait.usable == true);
        break;
      }
      case "5": {
        traitlist = this.traits.filter(trait => trait.ingot == true);
        break;
      }
      case "6": {
        traitlist = this.traits.filter(trait => trait.cloth == true);
        break;
      }
      case "7": {
        traitlist = this.traits.filter(trait => trait.accessory == true);
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

  identify2(index, item) {
    return item.slugname;
  }
}