import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-demonlist.component.html',
  providers: [DestroyService]
})

export class BR1DemonlistComponent extends ModalUseComponent {
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
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.br1service, 'demons');
    this.genericSEO(`Demons`, `The list of demons in ${this.gameTitle}.`);
    return this.br1service.getDemonList(this.language);
  }

  afterAssignment(): void {
    this.filteredDemons = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Demon[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Demon[] {
    let list: Demon[] = this.data;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(demon => {
        return demon.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}