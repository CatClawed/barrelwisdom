import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { DemonFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-demon.component.html',
  selector: 'brsl-demon',
})
export class BRSLDemonComponent extends SingleComponent implements OnInit {
  demon: DemonFull;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private brslservice: BRSLService,) {
    super(route, seoService);
    this.gameService(this.brslservice, 'demons');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.brslservice.getDemon(this.slug, this.language)
      .subscribe({
        next: demon => {
          this.error = ``;
          this.demon = demon;
          this.seoImage = `${this.imgURL}${this.section}/${this.demon.slug}.webp`
          this.genericSEO(this.demon.name, this.demon.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 