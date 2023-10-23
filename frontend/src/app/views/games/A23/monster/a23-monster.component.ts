import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Monster } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-monster.component.html',
  selector: 'a23-monster',
  providers: [DestroyService]
})
export class A23MonsterComponent extends SingleComponent {
  monster: Monster;
  chart = {
    RESIST: `<i class="fas fa-chevron-up"></i>`,
    NOEFFECT: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    SUPER_RESIST: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    WEAK: `<i class="fas fa-chevron-down"></i>`,
    SUPER_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
    GREAT_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.a23service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.gameService(this.a23service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc1);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 