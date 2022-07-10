import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { CategoryItem } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-category.component.html',
})
export class A22CategoryComponent extends SingleComponent implements OnInit {
  category: CategoryItem;

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a22service);
  }
  ngOnInit(): void {
    this.a22service.getCategoryItem(this.slug, this.language)
      .subscribe({
        next: category => {
          this.error = ``;
          this.category = category;
          this.seoURL = `${this.gameURL}/categories/${this.category.slug}/${this.language}`;
          this.seoTitle = `${this.category.name} - ${this.gameTitle}`;
          this.seoDesc = `All items in ${this.category.name}`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 