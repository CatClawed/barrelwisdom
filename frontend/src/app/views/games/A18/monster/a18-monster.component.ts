import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-monster.component.html',
  selector: 'a18-monster',
})
export class A18MonsterComponent extends SingleComponent implements OnInit {
  monster: Monster;
  chart = {
    1: `<i class="fa-solid fa-x"></i>`,
    2: `<i class="fa-solid fa-minus"></i>`,
    3: `<i class="fa-solid fa-caret-up"></i>`,
    4: `<i class="fa-regular fa-circle"></i>`,
    5: `<i class="fa-regular fa-circle-dot"></i>`,
    6: `<i class="fa-regular fa-star"></i>`
  }

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,) {
    super(route, seoService);
    this.gameService(this.a18service, 'monsters');
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a18service.getMonster(this.slug, this.language)
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc[0]);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 