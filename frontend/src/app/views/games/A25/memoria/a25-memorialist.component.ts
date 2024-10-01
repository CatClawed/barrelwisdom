import { Dialog } from '@angular/cdk/dialog';
import { KeyValuePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25MemoriaComponent } from './a25-memoria.component';

@Component({
  templateUrl: 'a25-memorialist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A25MemoriaComponent, KeyValuePipe, MatCheckboxModule]
})

export class A25MemorialistComponent extends DialogUseComponent {
  filteredMemoria: Observable<Memoria[]>;
  rarity = {
    1: "R",
    2: "SR",
    3: "SSR"
  }

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    protected a25service: A25Service,) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A25MemoriaComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      stats: 'date',
      show_jp: this.language === 'ja',
    })
  }

  changeData() {
    this.gameService(this.a25service, 'memoria');
    this.genericSettings(`Memoria`, `The list of memoria in ${this.gameTitle}.`);
    this.pageForm.reset();
    this.pageForm.get('show_jp').setValue(this.language === 'ja');
    return this.a25service.getMemoriaList(this.language);
  }

  afterAssignment(): void {
    this.filteredMemoria = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Memoria[]>),
      map((search: any) => search ?
        this.filterT(search.filtertext, search.stats, search.show_jp)
        : this.filterT('', 'date', this.language === 'ja'))
    );
  }

  private filterT(value: string, stat: string, show_jp: boolean): Memoria[] {
    let memorialist: Memoria[] = this.data;

    if (!show_jp) memorialist = memorialist.filter(mem => mem.gbl === true)

    switch (stat) {
      case "hp": {
        memorialist = memorialist.sort((a, b) => (a.hp30 > b.hp30 ? -1 : 1));
        break;
      }
      case "agi": {
        memorialist = memorialist.sort((a, b) => (a.spd30 > b.spd30 ? -1 : 1));
        break;
      }
      case "patk": {
        memorialist = memorialist.sort((a, b) => (a.patk30 > b.patk30 ? -1 : 1));
        break;
      }
      case "pdef": {
        memorialist = memorialist.sort((a, b) => (a.pdef30 > b.pdef30 ? -1 : 1));
        break;
      }
      case "matk": {
        memorialist = memorialist.sort((a, b) => (a.matk30 > b.matk30 ? -1 : 1));
        break;
      }
      case "mdef": {
        memorialist = memorialist.sort((a, b) => (a.mdef30 > b.mdef30 ? -1 : 1));
        break;
      }
      case "date": {
        memorialist = memorialist.sort((a, b) => (a.date > b.date ? -1 : 1));
        break;
      }
    }

    const filterValue = value.toLowerCase();
    return memorialist.filter(memoria => {
      return memoria.name.toLowerCase().includes(filterValue) || memoria.skill_desc.toLowerCase().includes(filterValue)
    });
  }
}
