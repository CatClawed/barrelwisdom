import { Dialog } from '@angular/cdk/dialog';
import { Location, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A25CharaComponent } from './a25-chara.component';
import { A25CharaFrameComponent } from './a25-charaframe.component';

@Component({
    templateUrl: 'a25-charalist.component.html',
    providers: [DestroyService],
    imports: [...CommonImports, ...MaterialFormImports, NgTemplateOutlet,
        MatMenuModule, MatCheckboxModule, A25CharaFrameComponent],
    styles: [
        `.char-grid {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
      grid-column-gap:0.8%;
    }`,
        `@media screen and (min-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(6,16%);
      }
    }`,
        `@media screen and (max-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(3,31%);
      }
    }`
    ]
})

export class A25CharalistComponent extends DialogUseComponent {
  filteredCharas: Observable<Character[]>;
  fillL = 'grey';
  fillR = 'grey';
  colors = ['red', 'green', 'yellow', 'blue', 'purple']

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
    this.component = A25CharaComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      roles: "",
      elems: "",
      colorL: '',
      colorR: '',
      six_star: false
    })
  }

  changeData() {
    this.gameService(this.a25service, 'characters');
    this.genericSettings(this.a25service.character_translation[this.language], `The list of characters in ${this.gameTitle}.`);
    this.pageForm.reset()
    return forkJoin({
      charas: this.a25service.getCharaList(this.language),
      roles: this.a25service.getFilter("role", this.language),
      elems: this.a25service.getFilter("element", this.language),
      colors: this.a25service.getFilter('color', this.language)
    });
  }

  afterAssignment(): void {
    this.filteredCharas = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Character[]>),
      map((search: any) => search ?
        this.filterT(search.filtertext, search.roles, search.elems, search.colorL, search.colorR, search.six_star)
        : this.filterT('', 'any', 'any', 'any', 'any', false)),
    );
  }

  private filterT(value: string, role: string, elem: string, colorL: string, colorR: string, six_star: boolean): Character[] {
    let charalist: Character[] = this.data.charas;

    if (six_star) charalist = charalist.filter(chara => chara.six_star === true)

    if (role != 'any' && role) {
      charalist = charalist.filter(chara => chara.role == role)
    }
    if (elem != 'any' && elem) {
      charalist = charalist.filter(chara => chara.elem == elem)
    }
    if (colorL !== 'any' && colorL) {
      charalist = charalist.filter(chara => chara.color1 == colorL)
    }
    if (colorR !== 'any' && colorR) {
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

  changeFill(color) {
    if (color === 'any' || !color) return 'grey';
    return this.a25service.colors[color];
  }
}
