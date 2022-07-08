import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ShopDevelop } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-shopdevelop.component.html',
})
export class A22ShopDevelopComponent extends SingleComponent implements OnInit {
  shopdevelop: ShopDevelop[];

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    private seoService: SeoService) {
    super(route);
    this.gameService(this.a22service);
  }
  ngOnInit(): void {
    this.seoURL = `${this.gameURL}/shopdevelop/${this.language}`;
    this.seoTitle = `Shop Development - ${this.gameTitle}`;
    this.seoDesc = `The full shop develop list.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.a22service.getShopDevList(this.language)
      .subscribe({
        next: shopdevelop => {
          this.error = ``;
          this.shopdevelop = shopdevelop;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 