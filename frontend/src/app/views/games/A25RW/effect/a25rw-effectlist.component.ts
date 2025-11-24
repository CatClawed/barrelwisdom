import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWEffectComponent } from './a25rw-effect.component';

@Component({
    templateUrl: 'a25rw-effectlist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports,
        A25RWEffectComponent, FilterListComponent]
})

export class A25RWEffectlistComponent extends DialogUseComponent {
  filteredEffects: Observable<Effect[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    protected a25rwservice: A25RWService,
  ) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A25RWEffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a25rwservice, 'effects');
    this.genericSettings(this.a25rwservice.effect_translation[this.language], `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a25rwservice.getEffectList(this.language);
  }

  afterAssignment(): void {
    this.filteredEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Effect[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Effect[] {
    this.hide = false;
    let effectlist: Effect[] = this.data;
    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue)
    });
  }
}