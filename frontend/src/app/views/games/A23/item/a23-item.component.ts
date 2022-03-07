import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { HistoryService } from '@app/services/history.service';

@Component({
  templateUrl: 'a23-item.component.html',
  selector: 'a23-item',
})
export class A23ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  item: Item;
  colset: string;

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  colors = {
    1: "39b4f6",
    2: "34d80d",
    3: "f7e331",
    4: "ff8242",
    5: "74497f"
  }

  icons = {
    1: "ice",
    2: "wind",
    3: "lightning",
    4: "fire",
    5: "light"
  }

constructor(
    private route: ActivatedRoute,
    private a23service: A23Service,
    public historyService: HistoryService,
    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slug = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a23service.getItem(this.slug, this.language)
    .subscribe({next: item => {
        this.error =``;
        this.item = item;

        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slug}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc1}`
        this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }

  checkLevel(maxLv, restrict, effect) {
    if (!maxLv) return 0;
    if (effect >= maxLv) {
      if (!restrict) return 1;
      if (effect >= restrict) return 2;
      return 1;
    }
    return 0;
  }
} 