import { Location } from '@angular/common';
import { Component, effect } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-effectlist.component.html',
  providers: [DestroyService]
})

export class A22EffectlistComponent extends ModalUseComponent {
  filteredEffects: Observable<Effect[]>;
  normal = false;
  ev = false;
  forge = false;
  kind: string;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a22service: A22Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: '1'
    })
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => this.kind = data.type)
  }

  changeData() {
    this.pageForm.reset();
    switch (this.kind) {
      case "normal": {
        this.normal = true;
        this.gameService(this.a22service, 'effects');
        this.genericSEO('Effects', `The list of effects in ${this.gameTitle}.`)
        break;
      }
      case "forge": {
        this.forge = true;
        this.gameService(this.a22service, 'forge-effects');
        this.genericSEO('Forge Effects', `The list of forge effects in ${this.gameTitle}.`)
        break;
      }
      case "ev": {
        this.ev = true;
        this.gameService(this.a22service, 'ev-effects');
        this.genericSEO('EV Effects', `The list of EV effects in ${this.gameTitle}.`)
        break;
      }
    }
    return this.a22service.getEffectList(this.language, this.ev, this.forge);
  }

  afterAssignment(): void {
    this.filteredEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Effect[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.slice())
    );
  }

  private filterT(value: string, type: string): Effect[] {
    let effectlist: Effect[] = this.data;
    if (type != "1") {
      effectlist = effectlist.filter(effect => effect.effsub == type)
    }
    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
    });
  }
}