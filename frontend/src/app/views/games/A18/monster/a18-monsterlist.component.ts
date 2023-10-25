import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster, Race } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-monsterlist.component.html',
  providers: [DestroyService]
})

export class A18MonsterlistComponent extends ModalUseComponent {
  monsters: Monster[];
  filteredMonsters: Observable<Monster[]>;
  races: Race[];

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

  changeData(): void {
    this.modalEvent();
    this.pageForm.reset();
    this.getMonsters();
    this.getRace();
  }

  getMonsters() {
    this.a18service.getMonsterList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monsters => {
          this.monsters = monsters;
          this.gameService(this.a18service, 'monsters');
          this.genericSEO(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
          this.filteredMonsters = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Monster[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.monsters.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getRace() {
    this.a18service.getRaceList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: races => {
          this.races = races;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, type: string): Monster[] {
    let list: Monster[] = this.monsters;
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