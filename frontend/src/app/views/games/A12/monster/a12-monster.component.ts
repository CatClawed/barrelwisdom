import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-monster.component.html',
  selector: 'a12-monster',
  providers: [DestroyService]
})
export class A12MonsterComponent extends SingleComponent2 {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.a12service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.gameService(this.a12service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slugname}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 