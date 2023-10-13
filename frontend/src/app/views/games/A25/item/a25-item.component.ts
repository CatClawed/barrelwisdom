import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-item.component.html',
  selector: 'a25-item',
})
export class A25ItemComponent extends SingleComponent implements OnInit {
  item: Item;

  @Input()
  itemkind: string = "";

  colors = {
    'red':    '#b63c3c',
    'blue':   '#3883ad',
    'green':  '#3eb880',
    'yellow': '#c9af47',
    'purple': '#ac48b9'
  }

  colorList = {
    'red':    'rgba(182,60,60,.7);',
    'blue':   'rgba(56,131,173,0.7);',
    'green':  'rgba(62,184,128,0.7);',
    'yellow': 'rgba(201,175,71,0.7);',
    'purple': 'rgba(172,72,185,0.7);'
  }

  stats = {
    'hp': {
      "en": "HP",
      "ja": "HP"
    },
    'agi': {
      "en": "AGI",
      "ja": "素早い"
    },
    'patk': {
      "en": "PATK",
      "ja": "物攻"
    },
    'pdef': {
      "en": "PDEF",
      "ja": "物防"
    },
    'matk': {
      "en": "MATK",
      "ja": "魔攻"
    },
    'mdef': {
      "en": "MDEF",
      "ja": "魔防"
    },
  }
  constructor(
    protected route: ActivatedRoute,
    private a25service: A25Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.itemkind = this.route.snapshot.params.itemkind ? this.route.snapshot.params.itemkind : '';
    this.gameService(this.a25service, `items/${this.itemkind}`);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    if (this.itemkind == 'materials') {
      this.a25service.getMaterial(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = (item.equip || item.combat) ? `404` : ``
          this.item = item;
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.genericSEO(this.item.name, this.item.desc ? this.item.desc : this.item.material[0].kind);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    }
    else if (this.itemkind == 'synthesis') {
      this.a25service.getSynth(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = item.material ? `404` : ``
          this.item = item;
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
    }
    else {
      this.error = `404`
    }
  }

  replaceVal(item: Item): string {
    if (item.equip) {
        if (item.equip[0].val_bad) {
            return item.desc.replace("{0}", `${item.equip[0].val_bad/100} ~ ${item.equip[0].val_good/100}`)
        }
        return item.desc.replace("{0}", ` ${item.equip[0].val_good/100}`)
    }
    if (item.combat[0].val_bad) {
        return item.desc.replace("{0}", `${item.combat[0].val_bad/100} ~ ${item.combat[0].val_good/100}`)
    }
    return item.desc.replace("{0}", ` ${item.combat[0].val_good/100}`)
  }

  insertStyle(item: Item): string {
    if (!item.material) return;
    if (!item.material[0].color) return;

    return `box-shadow: inset 0 0px 30px 4px ${this.colorList[item.material[0].color]}`
  }
} 