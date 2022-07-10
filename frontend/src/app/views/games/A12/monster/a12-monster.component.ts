import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-monster.component.html',
  selector: 'a12-monster',
})
export class A12MonsterComponent extends SingleComponent implements OnInit {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a12service, 'monsters');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a12service.getMonster(this.slug, this.language)
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