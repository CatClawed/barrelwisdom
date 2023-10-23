import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-monster.component.html',
  selector: 'a18-monster',
})
export class A18MonsterComponent extends SingleComponent {
  monster: Monster;
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

  changeData(): void {
    this.a18service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.gameService(this.a18service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc[0]);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 