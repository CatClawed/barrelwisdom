import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'br1-item.component.html',
  selector: 'br1-item',
})
export class BR1ItemComponent extends SingleComponent implements OnInit {
  item: Item;

  constructor(
    protected route: ActivatedRoute,
    private br1service: BR1Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.br1service);
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-7 mx-auto ";
    this.br1service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoURL = `${this.gameURL}/items/${this.item.slugname}/${this.language}`;
          this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.item.description}`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 