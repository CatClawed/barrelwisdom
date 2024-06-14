import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { Effect } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { A22EffectComponent } from './a22-effect.component';

@Component({
  templateUrl: 'a22-effectlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A22EffectComponent, Tooltip, MatButtonModule]
})

export class A22EffectlistComponent extends DialogUseComponent {
  filteredEffects: Observable<Effect[]>;
  normal = false;
  ev = false;
  forge = false;
  kind: string;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private a22service: A22Service,
  ) {
    super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
    this.component = A22EffectComponent;
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
        this.genericSettings('Effects', `The list of effects in ${this.gameTitle}.`)
        break;
      }
      case "forge": {
        this.forge = true;
        this.gameService(this.a22service, 'forge-effects');
        this.genericSettings('Forge Effects', `The list of forge effects in ${this.gameTitle}.`)
        break;
      }
      case "ev": {
        this.ev = true;
        this.gameService(this.a22service, 'ev-effects');
        this.genericSettings('EV Effects', `The list of EV effects in ${this.gameTitle}.`)
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