import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-category.component.html',
})
export class A23CategoryComponent extends SingleComponent implements OnInit {
  category: Category;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,) {
    super(route, seoService);
    this.gameService(this.a23service, 'categories');
  }
  ngOnInit(): void {
    this.a23service.getCategory(this.slug, this.language)
      .subscribe({
        next: category => {
          this.error = ``;
          this.category = category;
          this.genericSEO(this.category.name, `All items in ${this.category.name}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 