import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-chara.component.html',
  selector: 'a25-chara',
  styleUrls: ['../resleri.scss'],
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, Popover, MatSliderModule, MatCheckboxModule]
})
export class A25CharaComponent extends SingleComponent {
  stars: number[] = [1, 2, 3, 3.5, 4, 4.5, 5];
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

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a25service, 'charas');
    return this.a25service.getChara(this.slug, this.language)
  }

  afterAssignment(): void {
    this.seoImage = `${this.imgURL}characters/full/${this.data.slug}.webp`
    this.genericSEO(`${this.data.name} ${this.data.title}`,
        `Gifts: ${this.data.trait1.name} • ${this.data.trait2.name} • ${this.data.trait3.name}`)
  }

  getStat(stat: number, stars: number, level: number): number {
    return Math.floor(this.star_multiplier[stars] * (stat + stat / 10 * (level - 1)));
  }

  replaceDesc(skill) {
    let desc = skill.desc;
    if (skill.val0) {
      desc = skill.val0_2
        ? desc.replaceAll('{0}', `${skill.val0 / 100} ~ ${skill.val0_2 / 100}`)
        : desc.replaceAll('{0}', skill.val0 / 100);
    }
    if (skill.val1) {
      desc = skill.val1_2
        ? desc.replaceAll('{1}', `${skill.val1 / 100} ~ ${skill.val1_2 / 100}`)
        : desc.replaceAll('{1}', skill.val1 / 100);
    }
    if (skill.val2) {
      desc = skill.val2_2
        ? desc.replaceAll('{2}', `${skill.val2 / 100} ~ ${skill.val2_2 / 100}`)
        : desc.replaceAll('{2}', skill.val2 / 100);
    }
    return desc;
  }

  replacePassive(passive) {
    let desc = passive.desc;
    if (passive.val) {
      desc = desc.replaceAll('{0}', passive.val/100)
    }
    if (passive.val2) {
      desc = desc.replaceAll('{1}', passive.val2/100)
    }
    if (passive.val3) {
      desc = desc.replaceAll('{2}', passive.val3/100)
    }
    if (passive.val4) {
      desc = desc.replaceAll('{3}', passive.val4/100)
    }
    return desc;
  }
}
