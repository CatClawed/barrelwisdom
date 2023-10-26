import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-memorialist.component.html',
  providers: [DestroyService]
})

export class A25MemorialistComponent extends ModalUseComponent {
  memoria: Memoria[];
  filteredMemoria: Observable<Memoria[]>;

  rarity = {
    1: "R",
    2: "SR",
    3: "SSR"
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
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.modalEvent();
    this.pageForm.reset()
    this.a25service.getMemoriaList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: memoria => {
          this.memoria = memoria;
          this.gameService(this.a25service, 'memoria');
          this.genericSEO(`Memoria`, `The list of memoria in ${this.gameTitle}.`);
          this.filteredMemoria = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Memoria[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.memoria.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Memoria[] {
    let memorialist: Memoria[] = this.memoria;

    const filterValue = value.toLowerCase();
    return memorialist.filter(memoria => {
      return memoria.name.toLowerCase().includes(filterValue)
    });
  }
}