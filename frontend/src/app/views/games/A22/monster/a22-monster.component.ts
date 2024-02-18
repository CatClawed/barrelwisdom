import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-monster.component.html',
  selector: 'a22-monster',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A22MonsterComponent extends SingleComponent {
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

  changeData() {
    this.gameService(this.a22service, 'monsters');
    return this.a22service.getMonster(this.slug, this.language);
  }
  afterAssignment(): void {
    for (let i = 0; i < 5; i++) {
      if (i < this.data.hp_rank) {
        this.hp.push(true);
      }
      else {
        this.hp.push(false);
      }
      if (i < this.data.str_rank) {
        this.atk.push(true);
      }
      else {
        this.atk.push(false);
      }
      if (i < this.data.def_rank) {
        this.def.push(true);
      }
      else {
        this.def.push(false);
      }
      if (i < this.data.spd_rank) {
        this.spd.push(true);
      }
      else {
        this.spd.push(false);
      }
    }

    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSEO(this.data.name, this.data.desc);
  }
} 