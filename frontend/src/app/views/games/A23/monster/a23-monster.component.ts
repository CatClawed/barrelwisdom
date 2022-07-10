import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-monster.component.html',
  selector: 'a23-monster',
})
export class A23MonsterComponent extends SingleComponent implements OnInit {
  monster: Monster;
  chart = {
    RESIST: `<i class="fas fa-chevron-up"></i>`,
    NOEFFECT: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    SUPER_RESIST: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    WEAK: `<i class="fas fa-chevron-down"></i>`,
    SUPER_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
    GREAT_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
  }

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,) {
    super(route, seoService);
    this.gameService(this.a23service, 'monsters');
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a23service.getMonster(this.slug, this.language)
      .subscribe({
        next: monster => {
          this.error = ``;
          this.monster = monster;
          this.seoImage = `${this.imgURL}${this.section}/${this.monster.slug}.webp`
          this.genericSEO(this.monster.name, this.monster.desc1);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 