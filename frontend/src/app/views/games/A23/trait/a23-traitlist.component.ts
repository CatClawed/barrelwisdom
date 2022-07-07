import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trait } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-traitlist.component.html',
  providers: [DestroyService]
})

export class A23TraitlistComponent extends ListComponent implements OnInit {
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
    private a23service: A23Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'traits';
    this.traitControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.traitControl,
      transfers: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.a23service);
    this.getTraits();
    this.seoURL = `${this.gameURL}/traits/${this.language}`;
    this.seoTitle = `Traits - ${this.gameTitle}`;
    this.seoDesc = `The list of traits in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getTraits() {
    this.a23service.getTraitList(this.language)
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
    if (transfer != "1") {
      traitlist = this.traits.filter(trait => false == (trait.trans_atk == trait.trans_heal == trait.trans_dbf == trait.trans_buff == trait.trans_wpn == trait.trans_arm == trait.trans_acc == trait.trans_tal == trait.trans_syn == trait.trans_exp));
    }

    switch (transfer) {
      case "2":
        traitlist = traitlist.filter(trait => trait.trans_atk == true);
        break;
      case "3":
        traitlist = traitlist.filter(trait => trait.trans_heal == true);
        break;
      case "4":
        traitlist = traitlist.filter(trait => trait.trans_dbf == true);
        break;
      case "5":
        traitlist = traitlist.filter(trait => trait.trans_buff == true);
        break;
      case "6":
        traitlist = traitlist.filter(trait => trait.trans_wpn == true);
        break;
      case "7":
        traitlist = traitlist.filter(trait => trait.trans_arm == true);
        break;
      case "8":
        traitlist = traitlist.filter(trait => trait.trans_acc == true);
        break;
      case "9":
        traitlist = traitlist.filter(trait => trait.trans_tal == true);
        break;
      case "10":
        traitlist = traitlist.filter(trait => trait.trans_exp == true);
        break;
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