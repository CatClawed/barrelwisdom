import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A18EffectComponent } from './a18-effect.component';

@Component({
  templateUrl: 'a18-effectlist.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports,
    A18EffectComponent, MatButtonModule]
})

export class A18EffectlistComponent extends DialogUseComponent {
  filteredEffects: Observable<Effect[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
  ) {
    super(destroy$, router, route, location, seoService, cdkDialog);
    this.component = A18EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'effects');
    this.genericSEO(`Effects`, `The list of effects in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getEffectList(this.language);
  }

  afterAssignment(): void {
    this.filteredEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Effect[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): Effect[] {
    let effectlist: Effect[] = this.data;
    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
    });
  }
}