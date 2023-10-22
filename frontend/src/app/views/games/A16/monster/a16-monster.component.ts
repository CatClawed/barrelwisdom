import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-monster.component.html',
  selector: 'a16-monster',
  providers: [DestroyService]
})
export class A16MonsterComponent extends SingleComponent2 {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a16service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.gameService(this.a16service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slugname}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 