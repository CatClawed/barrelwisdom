import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Trait } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A26TraitComponent } from './a26-trait.component';

@Component({
    templateUrl: 'a26-traitlist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports,
        A26TraitComponent, FilterListComponent]
})

export class A26TraitlistComponent extends DialogUseComponent {
  filteredTraits: Observable<Trait[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    protected a26service: A26Service,) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A26TraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: 0
    })
  }

  changeData() {
    this.gameService(this.a26service, 'traits');
    this.genericSettings(`Traits`, `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a26service.getTraitList(this.language);
  }

  afterAssignment(): void {
    this.filteredTraits = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Trait[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.data.slice())
    );
  }

  private filterT(value: string, transfer: number): Trait[] {
    this.hide = false;
    let traitlist: Trait[] = this.data;
    if (transfer != 0) {
      traitlist = traitlist.filter(trait => !(trait.wep === trait.arm === trait.acc === trait.atk === trait.heal === trait.buff === trait.dbf));
    }

    switch (transfer) {
      case 1:
        traitlist = traitlist.filter(trait => trait.atk);
        break;
      case 2:
        traitlist = traitlist.filter(trait => trait.heal);
        break;
      case 3:
        traitlist = traitlist.filter(trait => trait.buff);
        break;
      case 4:
        traitlist = traitlist.filter(trait => trait.dbf);
        break;
      case 5:
        traitlist = traitlist.filter(trait => trait.wep);
        break;
      case 6:
        traitlist = traitlist.filter(trait => trait.arm);
        break;
      case 7:
        traitlist = traitlist.filter(trait => trait.acc);
        break;
    }
    if (!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      if (trait.desc2) {
        return trait.name.toLowerCase().includes(filterValue) || trait.desc1.toLowerCase().includes(filterValue) || trait.desc2.toLowerCase().includes(filterValue)
      }
      return trait.name.toLowerCase().includes(filterValue) || trait.desc1.toLowerCase().includes(filterValue)
    });
  }
}