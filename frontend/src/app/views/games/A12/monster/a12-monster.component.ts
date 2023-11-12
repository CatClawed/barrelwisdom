import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-monster.component.html',
  selector: 'a12-monster',
  providers: [DestroyService]
})
export class A12MonsterComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }
  changeData() {
    this.gameService(this.a12service, 'monsters');
    return this.a12service.getMonster(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 