import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, forkJoin } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-charalist.component.html',
  providers: [DestroyService],
  styles: [
    `.char-grid {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
      grid-column-gap:2%;
    }`,
    `@media screen and (min-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(4,23%);
      }
    }`,
    `@media screen and (max-width: 800px) {
      .char-grid {
        grid-template-columns:repeat(2,49%);
      }
    }`
  ],
})

export class A25CharalistComponent extends ModalUseComponent {
  filteredCharas: Observable<Character[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    protected a25service: A25Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      roles: "any",
      elems: "any",
      show_jp: this.language == 'en' ? false : true,
    })
  }

  changeData() {
    this.gameService(this.a25service, 'characters');
    this.genericSEO(`Characters`, `The list of characters in ${this.gameTitle}.`);
    this.pageForm.reset()
    return forkJoin({
      charas: this.a25service.getCharaList(this.language),
      roles: this.a25service.getFilter("role", this.language),
      elems: this.a25service.getFilter("element", this.language)
    });
  }

  afterAssignment(): void {
    this.filteredCharas = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Character[]>),
      map((search: any) => search ?
        this.filterT(search.filtertext, search.roles, search.elems, search.show_jp)
        : this.filterT('', 'any', 'any', this.language == 'en' ? false : true)),
    );
  }

  private filterT(value: string, role: string, elem: string, show_jp: boolean): Character[] {
    let charalist: Character[] = this.data.charas;

    if (!show_jp) charalist = charalist.filter(chara => chara.gbl === true)

    if (role != 'any') {
      charalist = charalist.filter(chara => chara.role == role)
    }
    if (elem != 'any') {
      charalist = charalist.filter(chara => chara.elem == elem)
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
}