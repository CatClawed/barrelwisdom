import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Effect } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A22EffectComponent } from './a22-effect.component';

@Component({
    templateUrl: 'a22-effectlist.component.html',
    imports: [...CommonImports, ...MaterialFormImports,
        A22EffectComponent, FilterListComponent]
})

export class A22EffectlistComponent extends DialogUseComponent {
  protected a22service = inject(A22Service);
  filteredEffects: Observable<Effect[]>;
  normal = false;
  ev = false;
  forge = false;
  kind: string;
  efftype: string;

  constructor() {
    super();
    this.component = A22EffectComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      type: ''
    })
    this.route.data
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => this.kind = data.type)
  }

  changeData() {
    this.pageForm.reset();
    switch (this.kind) {
      case "normal": {
        this.normal = true;
        this.efftype = 'Normal';
        this.gameService(this.a22service, 'effects');
        this.genericSettings(this.a22service.effect_translation[this.language], `The list of effects in ${this.gameTitle}.`)
        break;
      }
      case "forge": {
        this.forge = true;
        this.efftype = 'Forge';
        this.gameService(this.a22service, 'forge-effects');
        this.genericSettings(this.a22service.forgeeffect_translation[this.language], `The list of forge effects in ${this.gameTitle}.`)
        break;
      }
      case "ev": {
        this.ev = true;
        this.efftype = 'EV';
        this.gameService(this.a22service, 'ev-effects');
        this.genericSettings(this.a22service.eveffect_translation[this.language], `The list of EV effects in ${this.gameTitle}.`)
        break;
      }
    }
    return this.a22service.getEffectList(this.language, this.ev, this.forge);
  }

  override afterAssignment(): void {
    this.filteredEffects = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Effect[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.data.slice())
    );
  }

  private filterT(value: string, type: string): Effect[] {
    this.hide = false;
    let effectlist: Effect[] = this.data;
    if (type != "1" && type) {
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