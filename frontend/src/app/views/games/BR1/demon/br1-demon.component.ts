import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'br1-demon.component.html',
  selector: 'br1-demon',
})
export class BR1DemonComponent extends SingleComponent implements OnInit {
  demon: Demon;

  constructor(
    protected route: ActivatedRoute,
    private br1service: BR1Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.br1service);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-7 mx-auto ";
    this.br1service.getDemon(this.slug, this.language)
      .subscribe({
        next: demon => {
          this.error = ``;
          this.demon = demon;
          this.seoURL = `${this.gameURL}/demons/${this.demon.slugname}/${this.language}`;
          this.seoTitle = `${this.demon.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.demon.flavor}`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 