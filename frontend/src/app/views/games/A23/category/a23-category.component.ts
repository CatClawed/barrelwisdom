import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-category.component.html',
})
export class A23CategoryComponent extends SingleComponent implements OnInit {
  category: Category;

  constructor(
    protected route: ActivatedRoute,
    private seoService: SeoService,
    private a23service: A23Service,) {
    super(route);
    this.gameService(this.a23service);
  }
  ngOnInit(): void {
    this.a23service.getCategory(this.slug, this.language)
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