import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seed } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-seed.component.html',
})
export class A23SeedComponent extends SingleComponent implements OnInit {
  seeds: Seed[];

constructor(
  protected route: ActivatedRoute,
  protected seoService: SeoService,
  private a23service: A23Service,) {
    super(route, seoService);
    this.gameService(this.a23service);
  }
  ngOnInit(): void {
    this.a23service.getSeeds(this.language)
    .subscribe({next: seed => {
        this.error =``;
        this.seeds = seed;
        this.seoURL = `${this.gameURL}/seeds/${this.language}`;
        this.seoTitle = `Seeds - ${this.gameTitle}`;
        this.seoDesc = `About growing seeds, and the list of items you can get.`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 