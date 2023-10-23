import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { ModalUseComponent } from '@app/views/games/_prototype/modal-use.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-effectlist.component.html',
  providers: [DestroyService]
})

export class A18EffectlistComponent extends  ModalUseComponent {
  effects: Effect[];
  filteredEffects: Observable<Effect[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.pageForm.reset();
    this.a18service.getEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effects => {
          this.error = ``;
          this.effects = effects;
          this.gameService(this.a18service, 'effects');
          this.genericSEO(`Effects`, `The list of effects in ${this.gameTitle}.`);
          this.filteredEffects = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Effect[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.effects.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): Effect[] {
    let effectlist: Effect[] = this.effects;

    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
    });
  }
}