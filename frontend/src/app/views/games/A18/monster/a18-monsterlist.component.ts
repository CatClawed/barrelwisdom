import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-monsterlist.component.html',
  providers: [DestroyService]
})

export class A18MonsterlistComponent extends ModalUseComponent {
  filteredMonsters: Observable<Monster[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: 'Any'
    })
  }

  changeData() {
    this.gameService(this.a18service, 'monsters');
    this.genericSEO(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return forkJoin({
      monsters: this.a18service.getMonsterList(this.language),
      races: this.a18service.getRaceList(this.language)
    });
  }

  afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.monsters.slice())
    );
  }

  private filterT(value: string, type: string): Monster[] {
    let list: Monster[] = this.data.monsters;
    if (type != 'Any') {
      list = list.filter(mon => type == mon.race)
    }
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue)
    });
  }
}