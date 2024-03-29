import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-book.component.html',
  selector: 'a12-book',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A12BookComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a12service, 'recipe-books');
    return this.a12service.getBook(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 