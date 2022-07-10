import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryData } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-category.component.html',
})
export class A15CategoryComponent extends SingleComponent implements OnInit {
  category: CategoryData;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'categories');
  }
  ngOnInit(): void {
    this.a15service.getCategory(this.slug, this.language)
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