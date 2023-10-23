import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { ListComponent2 } from '@app/views/games/_prototype/list2.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-demonlist.component.html',
  providers: [DestroyService]
})

export class BR1DemonlistComponent extends ListComponent2 {
  demonControl: UntypedFormControl;
  demons: Demon[];
  filteredDemons: Observable<Demon[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private br1service: BR1Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.demonControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.demonControl
    })
  }

  changeData() {
    this.br1service.getDemonList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: demons => {
          this.demons = demons;
          this.gameService(this.br1service, 'demons');
          this.genericSEO(`Demons`, `The list of demons in ${this.gameTitle}.`);
          this.filteredDemons = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Demon[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.demons.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Demon[] {
    let list: Demon[] = this.demons;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(demon => {
        return demon.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}