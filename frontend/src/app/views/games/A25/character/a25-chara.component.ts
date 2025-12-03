import { Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-chara.component.html',
    selector: 'a25-chara',
    styleUrls: ['../resleri.scss'],
    imports: [...CommonImports, Popover, MatSliderModule, MatCheckboxModule]
})
export class A25CharaComponent extends SingleComponent {
  protected a25service = inject(A25Service);
  stars: number[] = [1, 2, 3, 3.5, 4, 4.5, 5, 6];
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
    5: 1.25,
    6: 1.5
  }

  changeData() {
    this.gameService(this.a25service, 'characters');
    return this.a25service.getChara(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}characters/full/${this.data.slug}.webp`
    this.genericSettings(`${this.data.name} ${this.data.title}`,
        `Gifts: ${this.data.trait1.name} • ${this.data.trait2.name} • ${this.data.trait3.name}`,
        this.a25service.character_translation[this.language], false, this.inputSlug ? false : true);
  }

  getStat(stat: number, stars: number, level: number): number {
    return Math.floor(this.star_multiplier[stars] * (stat + stat / 10 * (level - 1)));
  }

  replaceDesc(skill) {
    let desc = skill.desc;
    const skillval =  [skill.val0,   skill.val1,   skill.val2,   skill.val3,   skill.val4,   skill.val5,   skill.val6,  skill.val7,  skill.val8,  ];
    const skillval2 = [skill.val0_2, skill.val1_2, skill.val2_2, skill.val3_2, skill.val4_2, skill.val5_2, skill.val6_2,skill.val7_2,skill.val8_2,];
    for (let i = 0; i < skillval.length; i++) {
      if (skillval[i]) {
        desc = skillval2[i]
          ? desc.replaceAll(`{${i}}`, `${skillval[i] / 100} ~ ${skillval2[i] / 100}`)
          : desc.replaceAll(`{${i}}`, skillval[i] / 100);
      }
    }
    return desc;
  }

  replacePassive(passive) {
    let desc = passive.desc;
    const skillval = [passive.val, passive.val2, passive.val3, passive.val4, passive.val5, passive.val6]
    for (let i = 0; i < skillval.length; i++) {
      if (skillval[i]) {
        desc = desc.replaceAll(`{${i}}`, skillval[i]/100)
      }
    }
    return desc;
  }
}
