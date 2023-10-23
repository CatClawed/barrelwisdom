import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Character, NameLink } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { ListComponent2 } from '@app/views/games/_prototype/list2.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-charalist.component.html',
  providers: [DestroyService]
})

export class A25CharalistComponent extends ListComponent2 {
  charaControl: UntypedFormControl;
  roles: NameLink[];
  charas: Character[];
  filteredCharas: Observable<Character[]>;
  selectedFilter: "Any"

  gradients = {
    1: "background: linear-gradient(0deg, rgba(81,53,40,1) 0%, rgba(10,32,47,1) 50%, rgba(22,60,73,1) 100%);",
    2: "background: linear-gradient(0deg, rgba(167,150,124,1) 0%, rgba(208,185,131,1) 50%, rgba(106,84,36,1) 100%);",
    3: "background: linear-gradient(0deg, rgba(155,95,191,1) 0%, rgba(110,35,152,1) 50%, rgba(65,82,153,1) 100%);",
  }

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a25service: A25Service,) {
    super(modalService, destroy$, router, route, location, seoService);
    this.charaControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.charaControl,
      roles: "any"
    })
  }

  changeData(): void {
    this.getTransfer();
    this.getCharas();
  }

  getCharas() {
    this.a25service.getCharaList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: charas => {
          this.charas = charas;
          this.gameService(this.a25service, 'characters');
          this.genericSEO(`Characters`, `The list of characters in ${this.gameTitle}.`);
          this.filteredCharas = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Character[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.roles) : this.charas.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getTransfer() {
    this.a25service.getFilter("role", this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: role => {
          this.roles = role;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, role: string): Character[] {
    let charalist: Character[] = this.charas;

    if (role != 'any') {
      charalist = charalist.filter(chara => chara.role == role)
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