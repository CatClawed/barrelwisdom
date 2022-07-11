import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-monsterlist.component.html',
  providers: [DestroyService]
})

export class A22MonsterlistComponent extends ListComponent implements OnInit {
  monsterControl: UntypedFormControl;
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
    private formBuilder: UntypedFormBuilder,
    private a22service: A22Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a22service, 'monsters');
    this.monsterControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.monsterControl,
      type: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getMonsters();
    this.genericSEO(`Monsters`, `The list of monsters in ${this.gameTitle}.`);
  }

  getMonsters() {
    this.a22service.getMonsterList(this.language)
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
        list = this.monsters.filter(mon => mon.montype == 'puni');
        break;
      case "3":
        list = this.monsters.filter(mon => mon.montype == "weasel");
        break;
      case "4":
        list = this.monsters.filter(mon => mon.montype == "spirit");
        break;
      case "5":
        list = this.monsters.filter(mon => mon.montype == "golem");
        break;
      case "6":
        list = this.monsters.filter(mon => mon.montype == "sheep");
        break;
      case "7":
        list = this.monsters.filter(mon => mon.montype == "knight");
        break;
      case "8":
        list = this.monsters.filter(mon => mon.montype == "scorpion");
        break;
      case "9":
        list = this.monsters.filter(mon => mon.montype == "hedgehog");
        break;
      case "10":
        list = this.monsters.filter(mon => mon.montype == "wyrm");
        break;
      case "11":
        list = this.monsters.filter(mon => mon.montype == "roadrunner");
        break;
      case "12":
        list = this.monsters.filter(mon => mon.montype == "beetle");
        break;
      case "13":
        list = this.monsters.filter(mon => mon.montype == "shark");
        break;
      case "14":
        list = this.monsters.filter(mon => mon.size == "Small");
        break;
      case "15":
        list = this.monsters.filter(mon => mon.size == "Medium");
        break;
      case "16":
        list = this.monsters.filter(mon => mon.size == "Large");
        break;
      case "17":
        list = this.monsters.filter(mon => mon.montype == "boss");
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
}