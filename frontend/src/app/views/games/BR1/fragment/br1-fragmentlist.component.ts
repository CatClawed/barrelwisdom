import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FragmentEffect } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-fragmentlist.component.html',
  providers: [DestroyService]
})

export class BR1FragmentEffectlistComponent extends FragmentedComponent {
  fragmenteffects: FragmentEffect[];
  filteredFragmentEffects: Observable<FragmentEffect[]>;

  constructor(
    private formBuilder: UntypedFormBuilder,
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    private br1service: BR1Service,
    protected seoService: SeoService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: ''
    })
  }

  changeData() {
    this.br1service.getFragmentEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: fragmenteffects => {
          this.fragmenteffects = fragmenteffects;
          this.gameService(this.br1service, 'fragment-effects');
          this.genericSEO(`Fragment Effects`, `The list of fragment effects in ${this.gameTitle}.`);
          this.filteredFragmentEffects = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<FragmentEffect[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.fragmenteffects.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): FragmentEffect[] {
    let list: FragmentEffect[] = this.fragmenteffects;
    if (value) {
      const filterValue = value.toLowerCase();
      return list.filter(fragmenteffect => {
        return fragmenteffect.name.toLowerCase().includes(filterValue);
      });
    }
    return list;
  }
}