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
    private seoService: SeoService,
    private brslservice: BRSLService,) {
    super(route);
    this.gameService(this.brslservice);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.brslservice.getDemon(this.slug, this.language)
      .subscribe({
        next: demon => {
          this.error = ``;
          this.demon = demon;
          this.seoURL = `${this.gameURL}/demons/${this.demon.slug}/${this.language}`;
          this.seoTitle = `${this.demon.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.demon.desc}`
          this.seoImage = `${this.imgURL}demons/${this.demon.slug}.webp`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 