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
    this.gameService(this.a23service, 'seeds');
  }
  ngOnInit(): void {
    this.a23service.getSeeds(this.language)
    .subscribe({next: seed => {
        this.error =``;
        this.seeds = seed;
        this.genericSEO(`Seeds`, `About growing seeds, and the list of items you can get.`);
      },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 