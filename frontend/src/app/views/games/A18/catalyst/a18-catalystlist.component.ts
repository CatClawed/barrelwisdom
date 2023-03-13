import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Catalyst } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-catalystlist.component.html',
  providers: [DestroyService]
})

export class A18CatalystlistComponent extends SingleComponent implements OnInit {
  pageForm: UntypedFormGroup;
  catalystControl: UntypedFormControl;
  catalysts: Catalyst[];
  filteredCatalysts: Observable<Catalyst[]>;
  query: string = "";

  colors = {
    "white":  [`regular fa-circle`, `black`],
    "yellow": [`solid fa-circle`, `#edc200`],
    "violet": [`solid fa-circle`, `#ac07bb`],
    "red":    [`solid fa-circle`, `#ae4641`],
    "blue":   [`solid fa-circle`, `#445e7b`],
    "green":  [`solid fa-circle`, `#42b600`],
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
    private readonly destroy$: DestroyService,
  ) {
    super(route,  seoService);
    this.gameService(this.a18service, 'catalysts');
    this.catalystControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.catalystControl,
    })
  }

  ngOnInit(): void {
    this.query = this.route.snapshot.queryParamMap.get('search');
    if (this.query) { this.pageForm.controls['filtertext'].patchValue(this.query); }
    this.genericSEO(`Catalysts`, `The list of catalysts in ${this.gameTitle}.`);
    this.getCatalysts();
  }

  getCatalysts() {
    this.a18service.getCatalystList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: catalysts => {
          this.error =``;
          this.catalysts = catalysts;
          this.filteredCatalysts = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Catalyst[]>),
            map((search: any) => search || this.query ? this.filterT(search ? search.filtertext : "") : this.catalysts.slice())
          );
          this.pageForm.controls['filtertext'].setValue(this.query);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Catalyst[] {
    if(this.query) {
      value = this.query;
      this.query = "";
    }
    let catalystlist: Catalyst[] = this.catalysts;

    if (!value) {
      return catalystlist;
    }
    const filterValue = value.toLowerCase();
    return catalystlist.filter(catalyst => {
      return catalyst.item.name.toLowerCase().includes(filterValue) || 
        catalyst.action.some(act => act.toLowerCase().includes(filterValue)) ||
        catalyst.item.categories.some(cat => cat.name.toLowerCase().includes(filterValue))
    });
  }

  identify(index, item) {
    return item.slug;
}
}