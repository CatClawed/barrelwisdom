import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-memorialist.component.html',
  providers: [DestroyService]
})

export class A25MemorialistComponent extends ListComponent implements OnInit {
  memoriaControl: UntypedFormControl;
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
    this.gameService(this.a25service, 'memoria');
    this.memoriaControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.memoriaControl,
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getMemoria();
    this.genericSEO(`Memoria`, `The list of memoria in ${this.gameTitle}.`);
  }

  getMemoria() {
    this.a25service.getMemoriaList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: memoria => {
          this.memoria = memoria;
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