import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports, MaterialFormImports, ModalBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A12TraitComponent } from './a12-trait.component';

@Component({
  templateUrl: 'a12-traitlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, ModalBandaidModule,
    A12TraitComponent]
})
export class A12TraitlistComponent extends ModalUseComponent {
  filteredTraits: Observable<Trait[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a12service: A12Service) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: ''
    })
  }

  changeData() {
    this.gameService(this.a12service, 'traits');
    this.genericSEO(`Traits`, `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a12service.getTraitList(this.language);
  }
  afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.slice())
    );
  }

  private filterT(value: string, transfer: string): Trait[] {
    let traitlist: Trait[] = this.data;
    switch (transfer) {
      case "3": {
        traitlist = traitlist.filter(trait => trait.usable);
        break;
      }
      case "5": {
        traitlist = traitlist.filter(trait => trait.ingot);
        break;
      }
      case "6": {
        traitlist = traitlist.filter(trait => trait.cloth);
        break;
      }
      case "7": {
        traitlist = traitlist.filter(trait => trait.accessory);
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
}