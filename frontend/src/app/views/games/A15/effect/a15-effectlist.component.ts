import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Effect } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-effectlist.component.html',
  selector: 'a15-effectlist',
  providers: [DestroyService]
})

export class A15EffectlistComponent extends ListComponent implements OnInit {
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
    private a15service: A15Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.gameService(this.a15service, 'effects');
    this.effectControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.effectControl,
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.getEffects();
    this.genericSEO(`Effects`, `The list of effects in ${this.gameTitle}.`);
  }

  getEffects() {
    this.a15service.getEffectList(this.language)
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