import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-item.component.html',
  selector: 'brsl-item',
})
export class BRSLItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    private brslservice: BRSLService,
    protected seoService: SeoService) {
      super(route, seoService);
    this.gameService(this.brslservice);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.brslservice.getItem(this.slug, this.language)
    .subscribe({next: item => {
        this.error =``;
        this.item = item;
        this.seoURL = `${this.gameURL}/items/${this.item.slug}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 