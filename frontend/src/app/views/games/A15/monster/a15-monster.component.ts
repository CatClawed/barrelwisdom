import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { MonsterFull } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-monster.component.html',
  selector: 'a15-monster',
})
export class A15MonsterComponent extends SingleComponent implements OnInit {
  monster: MonsterFull;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'monsters');
  }
  ngOnInit(): void {
    if(this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a15service.getMonster(this.slug, this.language)
    .subscribe({next: monster => {
        this.error =``;
        this.monster = monster;
        this.seoImage = `${this.imgURL}${this.section}/${this.monster.slugname}.webp`
        this.genericSEO(this.monster.name, this.monster.desc);
      },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 