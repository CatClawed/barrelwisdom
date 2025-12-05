import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-item.component.html',
    selector: 'a22-item',
    encapsulation: ViewEncapsulation.None,
    styleUrl: '../a22.scss',
    imports: [...CommonImports, Popover]
})
export class A22ItemComponent extends SingleComponent {
  protected a22service = inject(A22Service);
  default: any[] = [];
  eff1: any[] = [];
  eff2: any[] = [];
  eff3: any[] = [];
  eff4: any[] = [];
  effs: any[] = [];
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

  changeData() {
    this.gameService(this.a22service, 'items');
    return this.a22service.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.default = [];
    this.eff1 = [];
    this.eff2 = [];
    this.eff3 = [];
    this.eff4 = [];
    this.effs = [];
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`;
    this.genericSettings(this.data.name, this.data.desc,
      this.a22service.item_translation[this.language],
      false,
      this.inputSlug ? false : true);

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
        if (this.eff1.length > 0) this.effs.push(this.eff1);
        if (this.eff2.length > 0) this.effs.push(this.eff2);
        if (this.eff3.length > 0) this.effs.push(this.eff3);
        if (this.eff4.length > 0) this.effs.push(this.eff4);
      }
    }
  }
}