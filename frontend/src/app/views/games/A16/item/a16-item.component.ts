import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-item.component.html',
  selector: 'a16-item',
  providers: [DestroyService]
})
export class A16ItemComponent extends SingleComponent {
  item: ItemFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a16service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.a16service, 'items');
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 