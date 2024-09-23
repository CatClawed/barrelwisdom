import { Dialog } from '@angular/cdk/dialog';
import { KeyValuePipe, Location, NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Character, Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import * as LZString from 'lz-string';
import { forkJoin, map, Observable, startWith } from 'rxjs';
import { DialogUseComponent } from '../../_prototype/dialog-use.component';
import * as FastIntCompress from 'fastintcompression';
import * as fflate from 'fflate';
import { LocalstorageService } from '@app/_helpers/local-storage';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  templateUrl: 'a25-collection.component.html',
  selector: 'a25-collection',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, MatTabsModule, KeyValuePipe,
    MatButtonModule, MatCheckboxModule, MatMenuModule, NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `.char-grid {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
      grid-column-gap:2%;
    }`,
    `.a25-star-font {
      -webkit-text-stroke-color:black;
      color:yellow;
      padding-top:0.3rem;
    }`,
    `.a25-char-font {
      height: 20%;
      width: 20%;
      aspect-ratio:1;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:50%;
      position:absolute;
      bottom:0;
      right:9%;
    }`,
    `@media screen and (min-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(4,23%);
      }
      .a25-char-font {
        font-size:1.7vw
      }
      .a25-star-font {
        font-size:2vw;
        -webkit-text-stroke-width:.2vw;
      }
      .a25-half-star {
        display:inline-block;
        overflow-x:clip;
        width:1.55vw;
      }
    }`,
    `@media screen and (max-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(2,49%);
      }
      .a25-char-font {
        font-size:5vw
      }
      .a25-star-font {
        font-size:5vw;
        -webkit-text-stroke-width:.4vw;
      }
      .a25-half-star {
        display: inline-block;
        overflow-x: clip;
        width: 4vw;
      }
    }`,
    `.a25-emblem {
      aspect-ratio:1;
      width: min(180px, 25%);
      max-width: 180px;
      filter: drop-shadow(10px 10px 3px darkgray);
    }`
  ]
})
export class A25CollectionComponent extends DialogUseComponent {
  collection = {
    emblems: {},
    characters: {},
    memoria: {},
  };
  shareCode: string;
  openTab = 0;
  filteredCharas: Observable<Character[]>;
  filteredMemoria: Observable<Memoria[]>;

  constructor(
    protected LocalStorage: LocalstorageService,
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
    this.component = A25CollectionComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      show_jp: this.language === 'ja',
      filtertext: '',
      roles: "any",
      elems: "any",
      colorL: 'any',
      colorR: 'any',
      stats: 'hp',
    })
    this.shareCode = this.LocalStorage.getItem('a25collect')
    if (this.shareCode) this.load()
  }

  changeData() {
    this.gameService(this.a25service, 'characters');
    this.genericSettings(`Collection`, `Show off your collectibles in ${this.gameTitle}.`);
    this.pageForm.reset();
    this.pageForm.get('show_jp').setValue(this.language === 'ja')
    return forkJoin({
        characters: this.a25service.getCharaList(this.language),
        memoria: this.a25service.getMemoriaList(this.language),
        emblems: this.a25service.getEmblems(this.language),
        roles: this.a25service.getFilter("role", this.language),
        elems: this.a25service.getFilter("element", this.language),
        colors: this.a25service.getFilter('color', this.language)
    })
  }

  changeTab(event) {
    let jp = this.pageForm.get('show_jp').value
    this.pageForm.reset();
    this.pageForm.get('show_jp').setValue(jp)
    this.openTab = event['index'];
  }

  afterAssignment(): void {
    this.filteredCharas = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Character[]>),
        map((search: any) => search ?
        this.filterT(search.filtertext, search.roles, search.elems, search.show_jp, search.colorL, search.colorR)
        : this.filterT('', 'any', 'any', this.language === 'ja', 'any', 'any')),
      );

      this.filteredMemoria = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Memoria[]>),
        map((search: any) => search ?
        this.filterB(search.filtertext, search.stats, search.show_jp)
        : this.filterB('', 'hp', this.language === 'ja'))
      );
  }

  private filterT(value: string, role: string, elem: string, show_jp: boolean, colorL: string, colorR: string): Character[] {
    let charalist: Character[] = this.data.characters;

    if (!show_jp) charalist = charalist.filter(chara => chara.gbl === true)

    if (role != 'any') {
      charalist = charalist.filter(chara => chara.role == role)
    }
    if (elem != 'any') {
      charalist = charalist.filter(chara => chara.elem == elem)
    }
    if (colorL !== 'any') {
      charalist = charalist.filter(chara => chara.color1 == colorL)
    }
    if (colorR !== 'any') {
      charalist = charalist.filter(chara => chara.color2 == colorR)
    }
    if (!value) {
      return charalist;
    }
    const filterValue = value.toLowerCase();
    return charalist.filter(chara => {
      return chara.name.toLowerCase().includes(filterValue) ||
        chara.title.toLowerCase().includes(filterValue)
    });
  }

  private filterB(value: string, stat: string, show_jp: boolean): Memoria[] {
    let memorialist: Memoria[] = this.data.memoria;

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
    }

    const filterValue = value.toLowerCase();
    return memorialist.filter(memoria => {
      return memoria.name.toLowerCase().includes(filterValue) || memoria.skill_desc.toLowerCase().includes(filterValue)
    });
  }

  changeEmblem(id: number) {
    let kind = this.collection.emblems[id]
    kind = (kind===undefined) ? 1 : kind + 1;
    if (kind <= 3) {
      this.collection.emblems[id]=kind;
    }
    else {
      delete this.collection.emblems[id];
    }
    this.save();
  }

  changeCharacter(id: number, rarity: number) {
    let kind = this.collection.characters[id]
    kind = (kind===undefined) ? rarity : kind + 1;
    if (kind <= 7) {
      this.collection.characters[id]=kind;
    }
    else {
      delete this.collection.characters[id];
    }
    this.save();
  }

  starMap = {
    1: [1, false],
    2: [2, false],
    3: [3, false],
    4: [3, true],
    5: [4, false],
    6: [4, true],
    7: [5, false]
  }

  fetchStars(id: number, rarity: number) {
    let stars = ['', '']
    let limit = rarity;
    if (this.collection.characters[id]) {
      if (this.starMap[this.collection.characters[id]][1]) {
        stars[1] = `<div class="a25-half-star"><span class="fa-star-half"></span></div>`;
      }
      limit = this.starMap[this.collection.characters[id]][0]
    }
    for (let i = 0; i < limit; i++) {
      stars[0] += '<span class="fa-star"></span>'
    }
    return stars[0]+stars[1];
  }

  changeMemoria(id: number) {
    let kind = this.collection.memoria[id]
    kind = (kind===undefined) ? 1 : kind + 1;
    if (kind <= 5) {
      this.collection.memoria[id]=kind;
    }
    else {
      delete this.collection.memoria[id];
    }
    this.save();
  }

  save() {
    let c = [0,0,0]
    let l = []
    let count = 0;
    for (let o in this.collection.characters) {
      c.push(Number(o))
      c.push(this.collection.characters[o])
      count += 1;
    }
    c[0]=count;
    count = 0;
    for (let o in this.collection.emblems) {
      c.push(Number(o))
      c.push(this.collection.emblems[o])
      count += 1;
    }
    l.push(count)
    c[1]=count;
    for (let o in this.collection.memoria) {
      c.push(Number(o))
      c.push(this.collection.memoria[o])
      count += 1;
    }
    c[2]=count;

    this.shareCode = btoa(new TextDecoder().decode(FastIntCompress.compress(c)))
    this.LocalStorage.setItem('a25collect', this.shareCode)
  }

  load() {
    let data = FastIntCompress.uncompress(new TextEncoder().encode(atob(this.shareCode)))
    console.log(data)
    let start = 3;
    for (let i = start; i < data[0]*2+start; i += 2) {
      this.collection['characters'][data[i]]=data[i+1]
    }
    start += data[0]*2;
    for (let i = start; i < data[1]*2+start; i += 2) {
      this.collection['emblems'][data[i]]=data[i+1]
    }
    start += data[1]*2;
    for (let i = start; i < data.length; i += 2) {
      this.collection['memoria'][data[i]]=data[i+1]
    }
  }

  changeFill(color) {
    if (color === 'any') return 'grey';
    return this.a25service.colors[color];
  }
}
