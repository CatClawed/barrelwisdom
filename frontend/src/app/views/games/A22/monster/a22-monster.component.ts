import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-monster.component.html',
  selector: 'a22-monster',
})
export class A22MonsterComponent extends SingleComponent implements OnInit {
  monster: MonsterFull;
  hp: boolean[] = [];
  atk: boolean[] = [];
  def: boolean[] = [];
  spd: boolean[] = [];

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a22service, 'monsters');
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a22service.getMonster(this.slug, this.language)
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
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 