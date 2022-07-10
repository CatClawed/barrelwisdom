import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryData } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-category.component.html',
})
export class A16CategoryComponent extends SingleComponent implements OnInit {
  category: CategoryData;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service);
    this.section = 'categories'
  }
  ngOnInit(): void {
    this.a16service.getCategory(this.slug, this.language)
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