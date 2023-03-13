import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-category.component.html',
})
export class A18CategoryComponent extends SingleComponent implements OnInit {
  category: Category;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,) {
    super(route, seoService);
    this.gameService(this.a18service, 'categories');
  }
  ngOnInit(): void {
    this.a18service.getCategory(this.slug, this.language)
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