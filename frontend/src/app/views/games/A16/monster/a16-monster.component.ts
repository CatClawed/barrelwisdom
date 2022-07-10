import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-monster.component.html',
  selector: 'a16-monster',
})
export class A16MonsterComponent extends SingleComponent implements OnInit {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service, 'monsters');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a16service.getMonster(this.slug, this.language)
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slugname}.webp`
          this.genericSEO(this.monster.name, this.monster.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 