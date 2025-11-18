import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { Monster } from '@app/views/games/A25RW/_services/a25rw.interface';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25RWMonsterComponent } from './a25rw-monster.component';

@Component({
    templateUrl: 'a25rw-monsterlist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        ItemComponent, MatButtonModule]
})

export class A25RWMonsterlistComponent extends DialogUseComponent {
  filteredMonsters: Observable<Monster[]>;
  things;

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
    this.component = A25RWMonsterComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      small: true,
      large: false,
      boss: false,
    })
    this.things = [
      this.pageForm.controls.small,
      this.pageForm.controls.large,
      this.pageForm.controls.boss,
    ]
  }

  changeData() {
    this.gameService(this.a25rwservice, 'monsters');
    this.genericSettings(this.a25rwservice.monster_translation[this.language], `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a25rwservice.getMonsterList(this.language);
  }

  afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.small, search.large, search.boss) : this.data.slice())
    );
  }

  private filterT(value: string, small: boolean, large: boolean, boss: boolean): Monster[] {
    this.hide = false;
    let list: Monster[] = this.data;
    list = small ? list.filter(trait => trait.index < 500) : list;
    list = large ? list.filter(trait => trait.index >= 500 && trait.index < 1000)  : list;
    list = boss  ? list.filter(trait => trait.index >= 1000) : list;

    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue)
    });
  }
}