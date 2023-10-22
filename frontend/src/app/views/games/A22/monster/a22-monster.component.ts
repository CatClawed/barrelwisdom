import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-monster.component.html',
  selector: 'a22-monster',
  providers: [DestroyService]
})
export class A22MonsterComponent extends SingleComponent2 {
  monster: MonsterFull;
  hp: boolean[] = [];
  atk: boolean[] = [];
  def: boolean[] = [];
  spd: boolean[] = [];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a22service.getMonster(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          for (let i = 0; i < 5; i++) {
            if (i < this.monster.hp_rank) {
              this.hp.push(true);
            }
            else {
              this.hp.push(false);
            }
            if (i < this.monster.str_rank) {
              this.atk.push(true);
            }
            else {
              this.atk.push(false);
            }
            if (i < this.monster.def_rank) {
              this.def.push(true);
            }
            else {
              this.def.push(false);
            }
            if (i < this.monster.spd_rank) {
              this.spd.push(true);
            }
            else {
              this.spd.push(false);
            }
          }
          this.gameService(this.a22service, 'monsters');
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 