import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-chara.component.html',
  selector: 'a25-chara',
})
export class A25CharaComponent extends SingleComponent implements OnInit {
  chara: Character;
  stars: number[] = [1,2,3,3.5,4,4.5,5];

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'charas');
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

  stats = {
    'hp': {
      "en": "HP", "ja": "HP"
    },
    'agi': {
      "en": "AGI", "ja": "素早い"
    },
    'patk': {
      "en": "PATK", "ja": "物攻"
    },
    'pdef': {
      "en": "PDEF", "ja": "物防"
    },
    'matk': {
      "en": "MATK", "ja": "魔攻"
    },
    'mdef': {
      "en": "MDEF", "ja": "魔防"
    },
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getChara(this.slug, this.language)
      .subscribe({
        next: chara => {
          this.chara = chara;
          this.genericSEO(`${this.chara.name} ${this.chara.title}`, `All data about ${this.chara.name}`);
        },   error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  getStat(stat: number, stars: number, level: number): number {
    return Math.floor(this.star_multiplier[stars] * (stat + stat / 10 * (level-1)));
  }
} 