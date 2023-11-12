import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-monsterlist.component.html',
  providers: [DestroyService]
})

export class A23MonsterlistComponent extends ModalUseComponent {
  filteredMonsters: Observable<Monster[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a23service: A23Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: ''
    })
  }

  changeData() {
    this.gameService(this.a23service, 'monsters');
    this.genericSEO(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a23service.getMonsterList(this.language);
  }

  afterAssignment(): void {
    this.filteredMonsters = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Monster[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.slice())
    );
  }

  private filterT(value: string, type: string): Monster[] {
    let list: Monster[];
    switch (type) {
      case "2":
        list = this.data.filter(mon => mon.kind == 'puni');
        break;
      case "3":
        list = this.data.filter(mon => ["golem", "jellyfish"].includes(mon.kind));
        break;
      case "4":
        list = this.data.filter(mon => ["rabbit", "bat", "bird", "dream-eater"].includes(mon.kind));
        break;
      case "5":
        list = this.data.filter(mon => ["ghost", "apostle"].includes(mon.kind));
        break;
      case "6":
        list = this.data.filter(mon => ["mushroom", "dryad"].includes(mon.kind));
        break;
      case "7":
        list = this.data.filter(mon => ["dragonaire", "sea-serpent"].includes(mon.kind));
        break;
      case "8":
        list = this.data.filter(mon => ["small-groll", "medium-groll", "elvira"].includes(mon.kind));
        break;
      default:
        list = this.data;
        break;
    }
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}