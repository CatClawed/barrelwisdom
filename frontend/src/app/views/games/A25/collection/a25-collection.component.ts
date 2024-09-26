import { ClipboardModule } from '@angular/cdk/clipboard';
import { Dialog } from '@angular/cdk/dialog';
import { KeyValuePipe, Location, NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageService } from '@app/_helpers/local-storage';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Character, Emblem, Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { A25CharaComponent } from '@app/views/games/A25/character/a25-chara.component';
import { A25MemoriaComponent } from '@app/views/games/A25/memoria/a25-memoria.component';
import * as FastIntCompress from 'fastintcompression';
import { forkJoin, map, Observable, startWith } from 'rxjs';

@Component({
  templateUrl: 'a25-collection.component.html',
  selector: 'a25-collection',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, MatTabsModule, KeyValuePipe,
    MatButtonModule, MatCheckboxModule, MatMenuModule, NgTemplateOutlet,
    A25MemoriaComponent, A25CharaComponent, Popover, ClipboardModule],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `.char-grid {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
      grid-column-gap:0.8%;
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
        grid-template-columns:repeat(6,16%);
      }
      .a25-char-font {
        font-size:1.4vw
      }
      .a25-star-font {
        font-size:1.5vw;
        -webkit-text-stroke-width:.15vw;
      }
      .a25-half-star {
        display:inline-block;
        overflow-x:clip;
        width:1vw;
      }
    }`,
    `@media screen and (max-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(3,31%);
      }
      .a25-char-font {
        font-size:4vw
      }
      .a25-star-font {
        font-size:4vw;
        -webkit-text-stroke-width:.4vw;
      }
      .a25-half-star {
        display: inline-block;
        overflow-x: clip;
        width: 3vw;
      }
    }`,
    `.a25-emblem {
      aspect-ratio:1;
      width: min(180px, 25%);
      max-width: 180px;
      filter: drop-shadow(10px 10px 3px darkgray);
    }`,
    `.mem-grid {
      display: grid;
    }`,
    `@media screen and (min-width: 800px) {
      .mem-grid {
        grid-template-columns:repeat(6,16%);
      }
      .a25-mem-font {
        font-size:1.4vw
      }
    }`
    ,
    `@media screen and (max-width: 800px) {
      .mem-grid {
        grid-template-columns:repeat(3,33%);
      }
      .a25-mem-font {
        font-size:1.4vw
      }
    }`,
    `.tabs-overflow2 {
      .mat-mdc-tab-body-content {
          overflow: hidden;
      }
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
  shareUrl: string = '';
  openTab = 0;
  filteredCharas: Observable<Character[]>;
  filteredMemoria: Observable<Memoria[]>;
  filteredEmblems: Observable<Emblem[]>;
  editMode: boolean = true;
  ranks = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
  }
  enc = new TextEncoder();
  dec = new TextDecoder();
  bad_data = false;
  areyousure = false;
  private _snackBar = inject(MatSnackBar);
  totals = {
    emblems_1: 0,
    emblems_2: 0,
    emblems_3: 0,
    memoria: 0,
    characters: 0,
    memoria_total: 0,
    emblem_total: 0,
    character_total: 0,
    memoria_gbl: 0,
    emblem_gbl: 0,
    character_gbl: 0
  }
  use_global_count: boolean;

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
    if (this.route.snapshot.params.code) {
      this.shareCode = this.route.snapshot.params.code;
      this.editMode = false;
    }
    else {
      this.shareCode = this.LocalStorage.getItem('a25collect')
    }
    this.pageForm = this.formBuilder.nonNullable.group({
      show_jp: this.editMode ? this.language === 'ja' : true,
      hide_missing: !this.editMode,
      filtertext: '',
      roles: "any",
      elems: "any",
      colorL: 'any',
      colorR: 'any',
      stats: 'hp',
    })
    if (this.shareCode) this.load()
    this.use_global_count = this.language !== 'ja';
  }

  changeData() {
    this.gameService(this.a25service, this.shareCode ? 'collect/'+this.shareCode : 'collect');
    this.genericSettings(`Collection`, `Show off your collectibles in ${this.gameTitle}.`);
    this.pageForm.reset();
    this.areyousure = false;
    this.pageForm.get('show_jp').setValue(this.editMode ? this.language === 'ja' : true)
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
    let missing = this.pageForm.get('hide_missing').value
    this.pageForm.reset();
    this.pageForm.get('show_jp').setValue(jp)
    this.pageForm.get('hide_missing').setValue(missing)
    this.openTab = event['index'];
  }

  afterAssignment(): void {
    this.use_global_count = this.detect_global();
    if (this.language !== 'ja' && !this.use_global_count) this.pageForm.get('show_jp').setValue(true)
    this.filteredCharas = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Character[]>),
        map((search: any) => search ?
        this.filterT(search.filtertext, search.roles, search.elems, search.show_jp, search.colorL, search.colorR, search.hide_missing)
        : this.filterT('', 'any', 'any', this.editMode ? this.language === 'ja' || !this.use_global_count : true, 'any', 'any', !this.editMode)),
      );

      this.filteredMemoria = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Memoria[]>),
        map((search: any) => search ?
        this.filterB(search.filtertext, search.stats, search.show_jp, search.hide_missing)
        : this.filterB('', 'hp', this.editMode ? this.language === 'ja' || !this.use_global_count : true, !this.editMode))
      );

      this.filteredEmblems = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Emblem[]>),
        map((search: any) => search ?
        this.filterC(search.show_jp)
        : this.filterC(this.editMode ? this.language === 'ja' || !this.use_global_count : true)),
      );
      this.totals['emblem_total'] = this.data.emblems.length;
      this.totals['memoria_gbl'] = this.data.memoria.filter(obj => obj.gbl === true).length
      this.totals['memoria_total'] = this.data.memoria.length
      this.totals['character_gbl'] = this.data.characters.filter(obj => obj.gbl === true).length
      this.totals['character_total'] = this.data.characters.length
      this.totals['emblem_gbl'] = this.data.emblems.filter(obj => obj.gbl === true).length
  }

  private filterT(value: string, role: string, elem: string, show_jp: boolean, colorL: string, colorR: string, hide_missing: boolean): Character[] {
    let charalist: Character[] = this.data.characters;

    if (!show_jp) charalist = charalist.filter(chara => chara.gbl === true)
    if (hide_missing) charalist = charalist.filter(mem => this.collection.characters[mem.id])

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

  private filterB(value: string, stat: string, show_jp: boolean, hide_missing: boolean): Memoria[] {
    let memorialist: Memoria[] = this.data.memoria;

    if (!show_jp) memorialist = memorialist.filter(mem => mem.gbl === true)
    if (hide_missing) memorialist = memorialist.filter(mem => this.collection.memoria[mem.id])

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

  private filterC(show_jp: boolean): Emblem[] {
    let emblemlist: Emblem[] = this.data.emblems;

    if (!show_jp || (!this.editMode && this.use_global_count)) emblemlist = emblemlist.filter(obj => obj.gbl === true)
    return emblemlist;
  }

  detect_global(): boolean {
    if (this.language === 'ja') return false;
    let temp = this.data.memoria.filter(obj => obj.gbl !== true && this.collection.memoria[obj.id]).length
    if (temp > 0) return false;
    temp = this.data.characters.filter(obj => obj.gbl !== true && this.collection.characters[obj.id]).length
    if (temp > 0) return false;
    temp = this.data.emblems.filter(obj => obj.gbl !== true && this.collection.emblems[obj.eid]).length
    if (temp > 0) return false;
    return true;
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

  changeCharacter(id: number, rarity: number, slug :string, event) {
    if (this.editMode) {
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
    else {
      this.openDialog(slug, event, 'characters', A25CharaComponent)
    }
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

  changeMemoria(id: number, slug: string, event) {
    if (this.editMode) {
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
    else {
      this.openDialog(slug, event, 'memoria', A25MemoriaComponent)
    }
  }

  save() {
    this.use_global_count = this.detect_global();
    this.totals['characters'] = 0;
    this.totals['memoria'] = 0;
    this.totals['emblems_1'] = 0;
    this.totals['emblems_2'] = 0;
    this.totals['emblems_3'] = 0;
    let c = [0,0,0]
    let count = 0;
    for (let o in this.collection.characters) {
      c.push(Number(o))
      c.push(this.collection.characters[o])
      count += 1;
    }
    c[0]=count;
    this.totals['characters']=count;
    count = 0;
    for (let o in this.collection.emblems) {
      c.push(Number(o))
      c.push(this.collection.emblems[o])
      count += 1;
      if (this.collection.emblems[o] === 1) this.totals['emblems_1'] += 1;
      if (this.collection.emblems[o] === 2) this.totals['emblems_2'] += 1;
      if (this.collection.emblems[o] === 3) this.totals['emblems_3'] += 1;
    }
    c[1]=count;
    count=0;
    for (let o in this.collection.memoria) {
      c.push(Number(o))
      c.push(this.collection.memoria[o])
      count += 1;
    }
    c[2]=count;
    this.totals['memoria'] = count;
    this.shareCode = this.encodeB64(c);
    this.LocalStorage.setItem('a25collect', this.shareCode)
    this.shareUrl = `https://barrelwisdom.com/resleri/collect/${this.shareCode}/en`;
  }

  // These stupid functions just to not use a deprecated function...
  // ...which totally works, but the nag in my brain wouldn't shut up
  encodeB64(data) {
    return btoa(encodeURIComponent(this.dec.decode(FastIntCompress.compress(data))).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    })).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
  }

  decodeB64(str) {
    try {
      if (str.length % 4 != 0){
        str += ('===').slice(0, 4 - (str.length % 4));
      }
      return FastIntCompress.uncompress(this.enc.encode(decodeURIComponent(Array.prototype.map.call(atob(str.replace(/-/g, '+').replace(/_/g, '/')), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))))
    } catch(e) {
      this.bad_data = true;
    }
    return '';
  }

  load() {
    this.totals = {
      emblems_1: 0,
      emblems_2: 0,
      emblems_3: 0,
      memoria: 0,
      characters: 0,
      memoria_total: 0,
      emblem_total: 0,
      character_total: 0,
      memoria_gbl: 0,
      emblem_gbl: 0,
      character_gbl: 0
    }
    this.shareUrl = `https://barrelwisdom.com/resleri/collect/${this.shareCode}/en`;
    let data = this.decodeB64(this.shareCode)
    this.bad_data = data.length % 2 === 0 || (data[0]+data[1]+data[2])*2+3 !== data.length;
    if (!this.bad_data) {
      let start = 3;
      for (let i = start; i < data[0]*2+start; i += 2) {
        this.collection['characters'][data[i]]=data[i+1]
        this.totals['characters'] += 1;
        if (data[i+1] > 7 && data[i+i] <= 0) this.bad_data = true;
      }
      start += data[0]*2;
      for (let i = start; i < data[1]*2+start; i += 2) {
        this.collection['emblems'][data[i]]=data[i+1]
        if (data[i+1] === 1) this.totals['emblems_1'] += 1
        if (data[i+1] === 2) this.totals['emblems_2'] += 1
        if (data[i+1] === 3) this.totals['emblems_3'] += 1
        if (data[i+1] > 3 && data[i+i] <= 0) this.bad_data = true;
      }
      start += data[1]*2;
      for (let i = start; i < data.length; i += 2) {
        this.collection['memoria'][data[i]]=data[i+1]
        this.totals['memoria'] += 1;
        if (data[i+1] > 5 && data[i+i] <= 0) this.bad_data = true;
      }
    }
    if (this.bad_data && this.editMode && this.LocalStorage.getItem('a25collect')) {
      this.LocalStorage.removeItem('a25collect');
      this.bad_data = false;
      this.shareCode = '';
      this.shareUrl = ''
    }
  }

  changeFill(color) {
    if (color === 'any') return 'grey';
    return this.a25service.colors[color];
  }

  openSnackBar() {
    this._snackBar.open("Link copied!", "Close", {duration: 2000});
  }

  import(permission? : boolean) {
    if (!this.LocalStorage.getItem('a25collect') || permission) {
      this.LocalStorage.setItem('a25collect', this.shareCode)
      this.router.navigateByUrl('/resleri/collect/'+this.language)
    }
    else if (permission === false) {
      this.areyousure = false;
    }
    else {
      this.areyousure = true;
    }
  }

  replaceDesc(emblem) {
    if (this.collection.emblems[emblem.eid] === 1 || this.collection.emblems[emblem.eid] === undefined) return emblem.desc.replace('{}', `+${emblem.lv1/100}%`)
    if (this.collection.emblems[emblem.eid] === 2) return emblem.desc.replace('{}', `+${emblem.lv2/100}%`)
    return emblem.desc.replace('{}', `+${emblem.lv3/100}%`)
  }
}
