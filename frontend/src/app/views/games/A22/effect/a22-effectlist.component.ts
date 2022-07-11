import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-effectlist.component.html',
  providers: [DestroyService]
})

export class A22EffectlistComponent extends ListComponent implements OnInit {
  effectControl: UntypedFormControl;
  effects: Effect[];
  filteredEffects: Observable<Effect[]>;
  normal = false;
  ev = false;
  forge = false;

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
    this.gameService(this.a22service, 'effects');
    this.effectControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.effectControl,
      type: ['']
    })
  }

  ngOnInit(): void {
    this.modalEvent();
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data.type == "normal") {
          this.normal = true;
          this.seoURL = `${this.gameURL}/effects/${this.language}`;
          this.seoTitle = `Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of effects in ${this.gameTitle}.`
        }
        if (data.type == "forge") {
          this.forge = true;
          this.seoURL = `${this.gameURL}/forge-effects/${this.language}`;
          this.seoTitle = `Forge Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of forge effects in ${this.gameTitle}.`
        }
        if (data.type == "ev") {
          this.ev = true;
          this.seoURL = `${this.gameURL}/ev-effects/${this.language}`;
          this.seoTitle = `EV Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of EV effects in ${this.gameTitle}.`
        }
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        this.getEffects();
      });
  }

  getEffects() {
    this.a22service.getEffectList(this.language, this.ev, this.forge)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effects => {
          this.effects = effects;
          this.filteredEffects = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Effect[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.effects.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string, type: string): Effect[] {
    let effectlist: Effect[];
    switch (type) {
      case "2":
        effectlist = this.effects.filter(effect => effect.effsub == 'Weapon');
        break;
      case "3":
        effectlist = this.effects.filter(effect => effect.effsub == "Armor");
        break;
      case "4":
        effectlist = this.effects.filter(effect => effect.effsub == "Accessory");
        break;
      case "5":
        effectlist = this.effects.filter(effect => effect.effsub == "Attack");
        break;
      case "6":
        effectlist = this.effects.filter(effect => effect.effsub == "Material");
        break;
      case "7":
        effectlist = this.effects.filter(effect => effect.effsub == "Heal");
        break;
      default:
        effectlist = this.effects;
        break;
    }

    if (!value) {
      return effectlist;
    }
    const filterValue = value.toLowerCase();
    return effectlist.filter(effect => {
      return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) || effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
    });
  }

  openModal2(template: TemplateRef<any>, slug: string, event?): void {
    if (event) {
      if(event.ctrlKey) {
        return;
      }
      else {
        event.preventDefault()
      }
    }
    this.selected = slug;
    this.location.go(`${this.gameURL}/effects/` + slug + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide
    .pipe(takeUntil(this.destroy$))
    .subscribe((reason: string | any) => {
      if(reason != "link") {
        if(this.normal) this.location.go(`${this.gameURL}/effects/` + this.language);
        if(this.forge) this.location.go(`${this.gameURL}/forge-effects/` + this.language);
        if(this.ev) this.location.go(`${this.gameURL}/ev-effects/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      }})
  }
}