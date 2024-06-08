import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { Trait } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18TraitComponent } from './a18-trait.component';

@Component({
  templateUrl: 'a18-traitlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A18TraitComponent, Tooltip]
})

export class A18TraitlistComponent extends ModalUseComponent {
  filteredTraits: Observable<Trait[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: 0
    })
  }

  changeData() {
    this.gameService(this.a18service, 'traits');
    this.genericSEO(`Traits`, `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getTraitList(this.language);
  }

  afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.slice())
    );
  }

  private filterT(value: string, transfer: number): Trait[] {
    let traitlist: Trait[] = this.data;
    if (transfer != 0) {
      traitlist = traitlist.filter(trait => !(trait.trans_atk === trait.trans_heal === trait.trans_wpn === trait.trans_arm === trait.trans_acc === trait.trans_syn));
    }

    switch (transfer) {
      case 1:
        traitlist = traitlist.filter(trait => trait.trans_syn);
        break;
      case 2:
        traitlist = traitlist.filter(trait => trait.trans_atk);
        break;
      case 3:
        traitlist = traitlist.filter(trait => trait.trans_heal);
        break;
      case 6:
        traitlist = traitlist.filter(trait => trait.trans_wpn);
        break;
      case 7:
        traitlist = traitlist.filter(trait => trait.trans_arm);
        break;
      case 8:
        traitlist = traitlist.filter(trait => trait.trans_acc);
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