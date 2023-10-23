import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-monster.component.html',
  selector: 'a15-monster',
  providers: [DestroyService]
})
export class A15MonsterComponent extends SingleComponent {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a15service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.gameService(this.a15service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slugname}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 