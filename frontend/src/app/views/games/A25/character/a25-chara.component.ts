import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-chara.component.html',
  selector: 'a25-chara',
  providers: [DestroyService]
})
export class A25CharaComponent extends SingleComponent {
  chara: Character;
  stars: number[] = [1,2,3,3.5,4,4.5,5];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  elements = {
    'wind':      '#3b853d',
    'fire':      '#b23e36',
    'ice':       '#2089bc',
    'lightning': '#9e8a1a',
    'slash':     '#776a55',
    'impact':    '#72543b',
    'pierce':    '#647189',
  }

  gradients = {
    1: "background: linear-gradient(0deg, rgba(81,53,40,1) 0%, rgba(10,32,47,1) 50%, rgba(22,60,73,1) 100%);",
    2: "background: linear-gradient(0deg, rgba(167,150,124,1) 0%, rgba(208,185,131,1) 50%, rgba(106,84,36,1) 100%);",
    3: "background: linear-gradient(0deg, rgba(155,95,191,1) 0%, rgba(110,35,152,1) 50%, rgba(65,82,153,1) 100%);",
  }

  star_multiplier = {
    1: 1,
    2: 1.06,
    3: 1.12,
    3.5: 1.16,
    4: 1.18,
    4.5: 1.2,
    5: 1.25
  }

  changeData(): void {
    
    this.a25service.getChara(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: chara => {
          this.chara = chara;
          this.gameService(this.a25service, 'charas');
          this.seoImage = `${this.imgURL}characters/full/${this.chara.slug}.webp`
          this.genericSEO(`${this.chara.name} ${this.chara.title}`,
            this.language == 'en' ?
              `Gifts: ${this.chara.trait1.name_en} • ${this.chara.trait2.name_en} • ${this.chara.trait3.name_en}` :
              `Gifts: ${this.chara.trait1.name_ja} • ${this.chara.trait2.name_ja} • ${this.chara.trait3.name_ja}`);
        },   error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getStat(stat: number, stars: number, level: number): number {
    return Math.floor(this.star_multiplier[stars] * (stat + stat / 10 * (level-1)));
  }

  replaceDesc(skill) {
    let desc = skill.desc;
    if (skill.val0) {
      desc = desc.replace('{0}', skill.val0/100);
    }
    if (skill.val1) {
      desc = desc.replace('{1}', skill.val1/100);
    }
    if (skill.val2) {
      desc = desc.replace('{2}', skill.val2/100);
    }
    return desc;
  }
} 