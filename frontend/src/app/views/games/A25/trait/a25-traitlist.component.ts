import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25CharaComponent } from '../character/a25-chara.component';
import { A25ItemComponent } from '../item/a25-item.component';
import { A25TraitComponent } from './a25-trait.component';

@Component({
  templateUrl: 'a25-traitlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A25ItemComponent, A25TraitComponent, A25CharaComponent]
})

export class A25TraitlistComponent extends ModalUseComponent {
  filteredTraits: Observable<Trait[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    protected a25service: A25Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.group({
      filtertext: '',
      transfers: "any"
    })
  }

  changeData() {
    this.gameService(this.a25service, 'traits');
    this.genericSEO(`Traits`, `The list of traits in ${this.gameTitle}.`); 
    this.pageForm.reset();
    return forkJoin({
      traits: this.a25service.getTraitList(this.language),
      transfer: this.a25service.getFilter("combat_type", this.language),
    })
  }

  afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.traits.slice())
    );
  }

  private filterT(value: string, transfer: string): Trait[] {
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