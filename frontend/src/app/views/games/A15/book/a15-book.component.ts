import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-book.component.html',
  selector: 'a15-book',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A15BookComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a15service, 'recipe-books');
    return this.a15service.getBook(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 