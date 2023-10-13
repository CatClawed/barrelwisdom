import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-chara.component.html',
  selector: 'a25-chara',
})
export class A25CharaComponent extends SingleComponent implements OnInit {
  chara: Character;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'charas');
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getChara(this.slug, this.language)
      .subscribe({
        next: chara => {
          this.chara = chara;
          this.genericSEO(this.chara.name, this.chara.role);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 