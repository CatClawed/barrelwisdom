import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-monster.component.html',
  selector: 'a18-monster',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A18MonsterComponent extends SingleComponent {
  chart = {
    1: `<i class="fa-solid fa-x"></i>`,
    2: `<i class="fa-solid fa-minus"></i>`,
    3: `<i class="fa-solid fa-caret-up"></i>`,
    4: `<i class="fa-regular fa-circle"></i>`,
    5: `<i class="fa-regular fa-circle-dot"></i>`,
    6: `<i class="fa-regular fa-star"></i>`
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a18service, 'monsters');
    return this.a18service.getMonster(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSEO(this.data.name, this.data.desc[0]);
  }
} 