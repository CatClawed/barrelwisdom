import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BR1DemonComponent } from './br1-demon.component';

@Component({
  templateUrl: 'br1-demonlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, BR1DemonComponent]
})

export class BR1DemonlistComponent extends DialogUseComponent {
  filteredDemons: Observable<Demon[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private br1service: BR1Service,
  ) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = BR1DemonComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.gameService(this.br1service, 'demons');
    this.genericSettings(`Demons`, `The list of demons in ${this.gameTitle}.`);
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