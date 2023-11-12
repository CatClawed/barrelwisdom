import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-item.component.html',
  selector: 'a16-item',
  styleUrls: ['../../_scss/dusk.scss'],
  providers: [DestroyService]
})
export class A16ItemComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a16service, 'items');
    return this.a16service.getItem(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 