import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-traitlist.component.html',
  providers: [DestroyService]
})
export class A22TraitlistComponent extends ListComponent implements OnInit {
  traitControl: FormControl;
  traits: Trait[];
  filteredTraits: Observable<Trait[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a22service: A22Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a22service, 'traits');
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
    this.a22service.getTraitList(this.language)
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
      case "2":
        traitlist = this.traits.filter(trait => trait.trans_atk == true);
        break;
      case "3":
        traitlist = this.traits.filter(trait => trait.trans_heal == true);
        break;
      case "4":
        traitlist = this.traits.filter(trait => trait.trans_dbf == true);
        break;
      case "5":
        traitlist = this.traits.filter(trait => trait.trans_buff == true);
        break;
      case "6":
        traitlist = this.traits.filter(trait => trait.trans_wpn == true);
        break;
      case "7":
        traitlist = this.traits.filter(trait => trait.trans_arm == true);
        break;
      case "8":
        traitlist = this.traits.filter(trait => trait.trans_acc == true);
        break;
    }
    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
    });
  }
}