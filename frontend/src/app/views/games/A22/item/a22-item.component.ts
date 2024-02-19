import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports, PopoverBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-item.component.html',
  selector: 'a22-item',
  styles: [
    `.badge-list {
      margin-right: 0.4em;
      margin-top: 0.3em;
      font-size: calc(0.9rem + 0.1vw) !important;
    }`,
    `@media screen and (max-width: 576px) {
      .badge-list {
        font-size: 2.5vw !important;
      }
    }`
  ],
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, PopoverBandaidModule]
})
export class A22ItemComponent extends SingleComponent {
  default: any[] = [];
  eff1: any[] = [];
  eff2: any[] = [];
  eff3: any[] = [];
  eff4: any[] = [];
  icons = {
    'Attack':    'type-attack',
    'Heal':      'type-heal',
    "Debuff":    'type-debuff',
    "Buff":      'type-buff',
    'Weapon':    'type-weapon',
    "Armor":     'type-armor',
    "Accessory": 'type-accessory',
    "Rare Item": 'category-key-items',
    "Synthesis": 'type-synthesis',
    "Material":  'material',
    "Essence":   'category-essence',
    "Field":     'category-tools'
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a22service, 'items');
    return this.a22service.getItem(this.slug, this.language);
  }

  afterAssignment(): void {
    this.default = [];
    this.eff1 = [];
    this.eff2 = [];
    this.eff3 = [];
    this.eff4 = [];
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`;
    this.genericSEO(this.data.name, this.data.desc);

    if (this.data.effectline_set) {
      if (this.data.effectline_set.length > 1) {
        let line = 0;
        for (let e of this.data.effectline_set) {
          if (e.number == 0) {
            this.default.push([e.name, e.slug]);
            line = line + 1;
          }
          if (line < e.line) {
            line = line + 1;
            this.default.push([]);
          }
          if (e.number > 0) {
            if (e.line == 1) { this.eff1.push([e.name, e.slug]); }
            if (e.line == 2) { this.eff2.push([e.name, e.slug]); }
            if (e.line == 3) { this.eff3.push([e.name, e.slug]); }
            if (e.line == 4) { this.eff4.push([e.name, e.slug]); }
          }
        }
      }
    }
  }
} 