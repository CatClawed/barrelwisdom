import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MonsterList } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-monsterlist.component.html',
  providers: [DestroyService]
})

export class A12MonsterlistComponent extends  ModalUseComponent {
  monsters: MonsterList[];
  filteredMonsters: Observable<MonsterList[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a12service: A12Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData(): void {
    this.pageForm.reset();
    this.a12service.getMonsterList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monsters => {
          this.monsters = monsters;
          this.gameService(this.a12service, 'monsters');
          this.genericSEO(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
          this.filteredMonsters = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<MonsterList[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.monsters.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): MonsterList[] {
    let list: MonsterList[] = this.monsters;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}