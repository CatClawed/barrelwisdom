import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { Trait } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A22TraitComponent } from './a22-trait.component';

@Component({
  templateUrl: 'a22-traitlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A22TraitComponent, Tooltip]
})
export class A22TraitlistComponent extends DialogUseComponent {
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
    private a22service: A22Service,) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A22TraitComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      transfers: ''
    })
  }

  changeData() {
    this.gameService(this.a22service, 'traits');
    this.genericSettings(`Traits`, `The list of traits in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a22service.getTraitList(this.language);
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
      case "2":
        traitlist = this.data.filter(trait => trait.trans_atk);
        break;
      case "3":
        traitlist = this.data.filter(trait => trait.trans_heal);
        break;
      case "4":
        traitlist = this.data.filter(trait => trait.trans_dbf);
        break;
      case "5":
        traitlist = this.data.filter(trait => trait.trans_buff);
        break;
      case "6":
        traitlist = this.data.filter(trait => trait.trans_wpn);
        break;
      case "7":
        traitlist = this.data.filter(trait => trait.trans_arm);
        break;
      case "8":
        traitlist = this.data.filter(trait => trait.trans_acc);
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