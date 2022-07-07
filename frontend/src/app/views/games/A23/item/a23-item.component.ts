import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EffectData, EffectLine, Item } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-item.component.html',
  selector: 'a23-item',
})
export class A23ItemComponent extends SingleComponent implements OnInit {

  item: Item;
  colors = {
    1: "39b4f6",
    2: "34d80d",
    3: "f7e331",
    4: "ff8242",
    5: "debee3"
  }
  icons = {
    1: "ice",
    2: "wind",
    3: "lightning",
    4: "fire",
    5: "light"
  }

  constructor(
    protected route: ActivatedRoute,
    private seoService: SeoService,
    private a23service: A23Service,
    public historyService: HistoryService) {
    super(route);
    this.gameService(this.a23service);
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a23service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          let name = (this.language === 'en') ? this.item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.item.name;
          this.seoURL = `${this.gameURL}/items/${this.item.slug}/${this.language}`;
          this.seoTitle = `${name} - ${this.gameTitle}`;
          this.seoDesc = `${this.item.desc1}`
          this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  checkLevel(maxLv, restrict, effectLine: EffectLine, effectData: EffectData) {
    if (restrict !== null) {
      if (effectLine.data.indexOf(effectData) >= restrict) return 2;
    }
    if (!maxLv) {
      return 0;
    }
    if (effectData.num >= maxLv) {
      return 1;
    }
    return 0;
  }
} 