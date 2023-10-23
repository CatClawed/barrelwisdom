import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { DemonList } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { ListComponent2 } from '@app/views/games/_prototype/list2.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-demonlist.component.html',
  providers: [DestroyService]
})

export class BRSLDemonlistComponent extends ListComponent2 {
  demons: DemonList[];
  filteredDemons: Observable<DemonList[]>;
  demonControl: UntypedFormControl;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private brslservice: BRSLService,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.demonControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.demonControl
    })
  }

  changeData() {
    this.brslservice.getDemonList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: demons => {
          this.demons = demons.slice(0, 103);
          this.gameService(this.brslservice, 'demons');
          this.genericSEO(`Demons`, `The list of demons in ${this.gameTitle}.`);
          this.filteredDemons = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<DemonList[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.demons.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): DemonList[] {
    let list: DemonList[] = this.demons;
    if (!value) {
      return list;
    }
    const filterValue = value.toLowerCase();
    return list.filter(mon => {
      return mon.name.toLowerCase().includes(filterValue);
    });
  }
}