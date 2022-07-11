import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-effectlist.component.html',
  providers: [DestroyService]
})

export class A16EffectlistComponent extends ListComponent implements OnInit {
  effectControl: UntypedFormControl;
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
    private a16service: A16Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a16service, 'effects');
    this.effectControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.effectControl
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getEffects();
    this.genericSEO(`Effects`, `The list of effects in ${this.gameTitle}.`);

    this.effectControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(search => {
        search.filtertext = search;
      });
  }

  getEffects() {
    this.a16service.getEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effects => {
          this.effects = effects;
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

  identify2(index, item) {
    return item.slugname;
  }
}