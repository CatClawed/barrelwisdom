import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-monsterlist.component.html',
  providers: [DestroyService]
})

export class A23MonsterlistComponent extends ListComponent implements OnInit {
  monsterControl: FormControl;
  monsters: Monster[];
  filteredMonsters: Observable<Monster[]>;
  currentType: string = "1";
  searchstring = "";

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a23service: A23Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'monsters';
    this.monsterControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.monsterControl,
      type: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.a23service);
    this.getMonsters();
    this.seoURL = `${this.gameURL}/monsters/${this.language}`;
    this.seoTitle = `Monsters - ${this.gameTitle}`;
    this.seoDesc = `The list of monsters in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  }

  getMonsters() {
    this.a23service.getMonsterList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monsters => {
          this.monsters = monsters;
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

  private filterT(value: string, type: string): Monster[] {
    let list: Monster[];
    switch (type) {
      case "2":
        list = this.monsters.filter(mon => mon.kind == 'puni');
        break;
      case "3":
        list = this.monsters.filter(mon => ["golem", "jellyfish"].includes(mon.kind));
        break;
      case "4":
        list = this.monsters.filter(mon => ["rabbit", "bat", "bird", "dream-eater"].includes(mon.kind));
        break;
      case "5":
        list = this.monsters.filter(mon => ["ghost", "apostle"].includes(mon.kind));
        break;
      case "6":
        list = this.monsters.filter(mon => ["mushroom", "dryad"].includes(mon.kind));
        break;
      case "7":
        list = this.monsters.filter(mon => ["dragonaire", "sea-serpent"].includes(mon.kind));
        break;
      case "8":
        list = this.monsters.filter(mon => ["small-groll", "medium-groll", "elvira"].includes(mon.kind));
        break;
      default:
        list = this.monsters;
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

  get f() { return this.pageForm.controls; }

  identify(index, item) {
    return item.slug;
  }
}