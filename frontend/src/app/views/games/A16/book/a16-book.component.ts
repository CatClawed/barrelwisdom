import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-book.component.html',
  selector: 'a16-book',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A16BookComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a16service, 'recipe-books');
    return this.a16service.getBook(this.slug, this.language);
  }

  afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 