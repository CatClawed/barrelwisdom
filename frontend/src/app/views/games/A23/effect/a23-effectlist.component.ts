import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Effect } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { ListComponent } from '@app/views/games/_prototype/list.component';

@Component({
  templateUrl: 'a23-effectlist.component.html',
  providers: [DestroyService]
})

export class A23EffectlistComponent extends ListComponent implements OnInit {
  effectControl: FormControl;
  effects: Effect[];
  filteredEffects: Observable<Effect[]>;

  constructor(
    protected modalService: BsModalService,
    protected readonly destroy$: DestroyService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private formBuilder: FormBuilder,
    private a23service: A23Service,
  ) {
    super(modalService, destroy$, router, route, location, seoService);
    this.section = 'effects';

    this.effectControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.effectControl,
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.gameService(this.a23service);

    this.seoURL = `${this.gameURL}/effects/${this.language}`;
    this.seoTitle = `Effects - ${this.gameTitle}`;
    this.seoDesc = `The list of effects in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    this.getEffects();
  }

  getEffects() {
    this.a23service.getEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effects => {
          this.error =``;
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
}